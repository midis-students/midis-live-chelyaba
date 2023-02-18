import { Panels } from '@/router';
import { Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import Filter from './Filter';
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
    <View id={props.id} activePanel={Panels.Map}>
      <Panel id={Panels.Map}>
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
