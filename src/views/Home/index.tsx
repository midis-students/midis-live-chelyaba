import { View, Panel, Group, PanelHeader } from '@vkontakte/vkui';
import { YMaps, Map } from 'react-yandex-maps';
import './home.css';
import MapOverlay from './MapOverlay';

type HomeProps = {
  id: string;
};

const mapSetting = {
  center: [55.171248, 61.387928],
  zoom: 14,
};

export default function Home(props: HomeProps) {
  return (
    <View id={props.id} activePanel="home">
      <Panel id="home">
        <PanelHeader>Главная</PanelHeader>
        <Group className="group">
          <YMaps>
            <Map defaultState={mapSetting} width="100%" height="100%" />
          </YMaps>
          <MapOverlay />
        </Group>
      </Panel>
    </View>
  );
}
