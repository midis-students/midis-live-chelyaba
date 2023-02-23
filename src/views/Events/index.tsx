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
            {isSuccess && data.map((event, index) => <Announcement key={index} item={event} />)}
          </Group>
        )}
      </Panel>
    </View>
  );
}
