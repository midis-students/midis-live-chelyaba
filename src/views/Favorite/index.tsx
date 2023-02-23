import { View, Panel, PanelHeader, Group } from '@vkontakte/vkui';
import Announcement from '@/components/Announcement';
import { AnnouncementEvents } from '@/types/api';
import { Panels } from '@/router';
import { Locale } from '@/locale';
import { APIPlace } from '@/lib/api/types';

type EventsProps = {
  id: string;
};

const events: APIPlace[] = [];

for (let i = 0; i < 15; i++) {
  events.push({
    address: `09:00-23:00`,
    name: `Шняга №${i}`,
    logo: '',
    geoPoint: [0, 0],
    phones: [],
    price: 0,
    type: 'other',
    id: '-',
  });
}

export default function Favorite(props: EventsProps) {
  return (
    <View id={props.id} activePanel={Panels.Favorite}>
      <Panel id={Panels.Favorite}>
        <PanelHeader>{Locale.pages.favorite}</PanelHeader>
        <Group style={{ height: 'var(--main-group-height)', overflow: 'auto' }}>
          {events.map((event, index) => (
            <Announcement key={index} item={event} />
          ))}
        </Group>
      </Panel>
    </View>
  );
}
