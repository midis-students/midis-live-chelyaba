import Announcement from '@/components/Announcement';
import useAnnouncement from '@/lib/api/hooks/useAnnouncement';
import { Modals } from '@/router';
import { useFilter } from '@/store/filter';
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
  { id: 'cinema', label: 'Кино' },
  { id: 'theatre', label: 'Театр' },
  { id: 'museum', label: 'Музей' },
  { id: 'gallery', label: 'Галлерея' },
  { id: 'showRoom', label: 'Шоурум' },
  { id: 'restaurant', label: 'Ресторан' },
  { id: 'other', label: 'Другое' },
];

const minHeight = 20;
const maxHeight = 85;

export default function MapOverlay() {
  const { data, isSuccess, isLoading } = useAnnouncement();
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(maxHeight);
  const { add, remove, has, list, price } = useFilter();

  const router = useRouter();

  const openModal = () => router.pushModal(Modals.Filter);

  const resize = () => {
    setHeight((prev) => (prev === maxHeight ? minHeight : maxHeight));
  };

  const isFull = height === maxHeight;

  let filterlist = data as NonNullable<typeof data>;
  if (isSuccess && data) {
    if (list.length) {
      filterlist = filterlist.filter((point) => has(point.type));
    }

    filterlist = filterlist.filter(
      (point) => point.price >= (price.min || 0) && point.price <= (price.max || Number.MAX_VALUE),
    );
  }

  return (
    <Group className="overlay" getRootRef={ref} style={{ height: height + 'vh' }}>
      <SubnavigationBar>
        <SubnavigationButton before={<Icon24Filter />} expandable selected onClick={openModal}>
          Фильтры
        </SubnavigationButton>
        {filters.map((filter) => (
          <SubnavigationButton
            key={filter.id}
            selected={has(filter.id)}
            onClick={() => {
              if (has(filter.id)) {
                remove(filter.id);
              } else {
                add(filter.id);
              }
            }}
          >
            {filter.label}
          </SubnavigationButton>
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
            {isSuccess &&
              filterlist.map((event, index) => <Announcement key={index} item={event} />)}
          </List>
        )}
      </Card>
    </Group>
  );
}
