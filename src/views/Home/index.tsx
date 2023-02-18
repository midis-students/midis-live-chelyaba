import useAnnouncement from '@/lib/api/hooks/useAnnouncement';
import { Locale } from '@/locale';
import { Panels } from '@/router';
import { Group, Panel, PanelHeader, View } from '@vkontakte/vkui';
import React from 'react';
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';
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
  const { data, isSuccess } = useAnnouncement();

  return (
    <View id={props.id} activePanel={Panels.Map}>
      <Panel id={Panels.Map}>
        <PanelHeader>{Locale.pages.main}</PanelHeader>
        <Group className="group">
          <YMaps>
            <Map defaultState={mapSetting} width="100%" height="100%">
              <Clusterer>
                {isSuccess &&
                  data.map((point) => (
                    <Placemark
                      defaultGeometry={point.geoPoint}
                      properties={{ iconCaption: point.name }}
                      options={{ preset: 'islands#circleDotIcon' }}
                    />
                  ))}
              </Clusterer>
            </Map>
          </YMaps>
          <MapOverlay />
        </Group>
      </Panel>
    </View>
  );
}
