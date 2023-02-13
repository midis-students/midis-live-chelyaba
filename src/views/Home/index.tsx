import { View, Panel, Group, PanelHeader } from '@vkontakte/vkui';
import { YMaps, Map } from 'react-yandex-maps';
import './style.module.css';

type HomeProps = {
  id: string;
};

const ChelabaPos = [55.1492204, 61.2054144];

export default function Home(props: HomeProps) {
  return (
    <View id={props.id} activePanel="home">
      <Panel id="home">
        <PanelHeader>Главная</PanelHeader>
        <Group className={'group'}>
          <YMaps>
            <Map defaultState={{ center: ChelabaPos, zoom: 12 }} width="100%" height="100%" />
          </YMaps>
        </Group>
      </Panel>
    </View>
  );
}
