import { View, Panel, PanelHeader, Group } from '@vkontakte/vkui';
import Announcement from '@/components/Announcement';
import { AnnouncementEvents } from '@/types/api';
import { Panels } from '@/router';

type EventsProps = {
  id: string;
};

const events: AnnouncementEvents[] = [];

const getFormatedDate = (date: Date) =>
  date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });

for (let i = 0; i < 15; i++) {
  events.push({
    caption: `09:00-23:00`,
    date: getFormatedDate(new Date(`02.${i + 1}.2023`)),
    name: `Шняга №${i}`,
  });
}

export default function Events(props: EventsProps) {
  return (
    <View id={props.id} activePanel={Panels.Events}>
      <Panel id={Panels.Events}>
        <PanelHeader>События</PanelHeader>
        <Group>
          {events.map((event, index) => (
            <Announcement key={index} {...event} />
          ))}
        </Group>
      </Panel>
    </View>
  );
}
