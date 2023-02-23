import Announcement from '@/components/Announcement';
import useAnnouncement from '@/lib/api/hooks/useAnnouncement';
import { Modals } from '@/router';
import { AnnouncementEvents } from '@/types/api';
import { useRouter } from '@happysanta/router';
import { Icon24Filter } from '@vkontakte/icons';
import {
  Card,
  Group,
  List,
  PanelSpinner,
  SubnavigationBar,
  SubnavigationButton,
  Touch,
} from '@vkontakte/vkui';
import React from 'react';
import './map-overlay.css';

const filters = [
  { id: 'caffe', label: 'Кафе' },
  { id: 'cinema', label: 'Кино' },
  { id: 'bar', label: 'Бар' },
  { id: 'restoran', label: 'Ресторан' },
];

const minHeight = 20;
const maxHeight = 85;

const events: AnnouncementEvents[] = [];

export default function MapOverlay() {
  const { data, isSuccess, isLoading } = useAnnouncement();
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(maxHeight);

  const router = useRouter();

  const openModal = () => router.pushModal(Modals.Filter);

  const resize = () => {
    setHeight((prev) => (prev === maxHeight ? minHeight : maxHeight));
  };

  const isFull = height === maxHeight;

  return (
    <Group className="overlay" getRootRef={ref} style={{ height: height + 'vh' }}>
      <SubnavigationBar>
        <SubnavigationButton before={<Icon24Filter />} expandable selected onClick={openModal}>
          Фильтры
        </SubnavigationButton>
        {filters.map((filter) => (
          <SubnavigationButton key={filter.id}>{filter.label}</SubnavigationButton>
        ))}
      </SubnavigationBar>
      <Card mode="outline">
        <Touch className="overlay__touch" onClick={resize} />
        {isLoading ? (
          <PanelSpinner />
        ) : (
          <List
            className="overlay__list"
            style={{ height: height / 1.25 + 'vh', pointerEvents: isFull ? 'auto' : 'none' }}
          >
            {isSuccess && data.map((event, index) => <Announcement key={index} item={event} />)}
          </List>
        )}
      </Card>
    </Group>
  );
}
