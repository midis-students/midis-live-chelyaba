import { View, Panel, Group, PanelHeader } from '@vkontakte/vkui';
import { YMaps, Map } from 'react-yandex-maps';
import './home.css';

type HomeProps = {
  id: string;
};

const ChelabaPos = [55.171248, 61.387928];

export default function Home(props: HomeProps) {
  return (
    <View id={props.id} activePanel="home">
      <Panel id="home">
        <PanelHeader>Главная</PanelHeader>
        <Group className="group">
          <YMaps>
            <Map defaultState={{ center: ChelabaPos, zoom: 12 }} width="100%" height="100%" />
          </YMaps>
        </Group>
      </Panel>
    </View>
  );
}
