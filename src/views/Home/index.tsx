import useAnnouncement from '@/lib/api/hooks/useAnnouncement';
import { Locale } from '@/locale';
import { Panels } from '@/router';
import { useFilter } from '@/store/filter';
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
  const { has, list, price } = useFilter();

  let filterlist = data as NonNullable<typeof data>;
  if (isSuccess && data) {
    if (list.length) {
      filterlist = filterlist.filter((point) => has(point.type));
    }

    filterlist = filterlist.filter(
      (point) => point.price >= (price.min || 0) && point.price <= (price.max || Number.MAX_VALUE),
    );
  }

  return (
    <View id={props.id} activePanel={Panels.Map}>
      <Panel id={Panels.Map}>
        <PanelHeader>{Locale.pages.main}</PanelHeader>
        <Group className="group">
          <YMaps>
            <Map defaultState={mapSetting} width="100%" height="100%">
              <Clusterer>
                {isSuccess &&
                  filterlist.map((point) => (
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
