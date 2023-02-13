import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { View, Panel, PanelHeader, Group, Placeholder } from '@vkontakte/vkui';

type EventsProps = {
  id: string;
};

export default function Events(props: EventsProps) {
  return (
    <View id={props.id} activePanel="events">
      <Panel id="events">
        <PanelHeader>События</PanelHeader>
        <Group style={{ height: '1000px' }}></Group>
      </Panel>
    </View>
  );
}
