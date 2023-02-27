import { View, Panel, PanelHeader, Group, Text, Placeholder } from '@vkontakte/vkui';
import Announcement from '@/components/Announcement';
import { Icon56FavoriteOutline } from '@vkontakte/icons';
import { Panels } from '@/router';
import { Locale } from '@/locale';
import { APIPlace } from '@/lib/api/types';
import { useFavorite } from '@/store/favorite';
import { useEffect, useState } from 'react';
import { Api } from '@/lib/api';

type EventsProps = {
  id: string;
};

export default function Favorite(props: EventsProps) {
  const [events, setEvents] = useState<APIPlace[]>([]);
  const list = useFavorite((select) => select.list);

  useEffect(() => {
    if (list.length) Api.instance.getListById(list).then((events) => setEvents(events));
  }, []);

  return (
    <View id={props.id} activePanel={Panels.Favorite}>
      <Panel id={Panels.Favorite}>
        <PanelHeader>{Locale.pages.favorite}</PanelHeader>
        {list.length ? (
          <Group style={{ height: 'var(--main-group-height)', overflow: 'auto' }}>
            {events.map((event, index) => (
              <Announcement key={index} item={event} />
            ))}
          </Group>
        ) : (
          <Group>
            <Placeholder icon={<Icon56FavoriteOutline width={56} height={56} />}>
              Вы еще ничего не добавили
            </Placeholder>
          </Group>
        )}
      </Panel>
    </View>
  );
}
