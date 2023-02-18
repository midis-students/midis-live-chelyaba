import { View, Panel, PanelHeader, Group, PanelSpinner } from '@vkontakte/vkui';
import Announcement from '@/components/Announcement';
import { AnnouncementEvents } from '@/types/api';
import { Panels } from '@/router';
import { Locale } from '@/locale';
import useAnnouncement from '@/lib/api/hooks/useAnnouncement';

type EventsProps = {
  id: string;
};

const events: AnnouncementEvents[] = [];

const getFormatedDate = (date: Date) =>
  date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });

for (let i = 0; i < 15; i++) {
  events.push({
    avatar: 'https://s5.afisha.ru/mediastorage/27/bc/b31ac7676e324eeebd888e77bc27.jpg',
    caption: `09:00-23:00`,
    date: getFormatedDate(new Date(`02.${i + 1}.2023`)),
    name: `Шняга №${i}`,
  });
}

export default function Events(props: EventsProps) {
  const { data, isSuccess, isLoading } = useAnnouncement();

  return (
    <View id={props.id} activePanel={Panels.Events}>
      <Panel id={Panels.Events}>
        <PanelHeader>{Locale.pages.events}</PanelHeader>
        {isLoading ? (
          <PanelSpinner />
        ) : (
          <Group style={{ height: 'var(--main-group-height)', overflow: 'auto' }}>
            {isSuccess &&
              data.map((event, index) => (
                <Announcement key={index} avatar={event.logo} name={event.name} caption={''} />
              ))}
          </Group>
        )}
      </Panel>
    </View>
  );
}
