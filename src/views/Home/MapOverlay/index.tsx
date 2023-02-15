import { Icon24Filter } from '@vkontakte/icons';
import { Card, Group, SubnavigationBar, SubnavigationButton, Touch } from '@vkontakte/vkui';
import { TouchEventHandler } from '@vkontakte/vkui/dist/components/Touch/Touch';
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

export default function MapOverlay() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(80);

  const resize = () => {
    setHeight((prev) => (prev === maxHeight ? minHeight : maxHeight));
  };

  return (
    <Group className="overlay" getRootRef={ref} style={{ height: height + 'vh' }}>
      <SubnavigationBar>
        <SubnavigationButton before={<Icon24Filter />} expandable selected>
          Фильтры
        </SubnavigationButton>
        {filters.map((filter) => (
          <SubnavigationButton key={filter.id}>{filter.label}</SubnavigationButton>
        ))}
      </SubnavigationBar>
      <Card mode="outline">
        <Touch className="overlay__touch" onClick={resize} />
        <Group>Список...</Group>
      </Card>
    </Group>
  );
}
