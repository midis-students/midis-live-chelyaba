import { APIPlace } from '@/lib/api/types';
import { Panels } from '@/router';
import { useParams, useRouter } from '@happysanta/router';
import {
  View,
  Panel,
  PanelHeader,
  Group,
  Button,
  ButtonGroup,
  Text,
  Div,
  Title,
  SimpleCell,
  PanelHeaderClose,
} from '@vkontakte/vkui';
import { useQueryClient } from 'react-query';
import './about.css';

import {
  Icon28PinOutline,
  Icon28UnpinOutline,
  Icon28PhoneOutline,
  Icon28ClockOutline,
  Icon28ShareOutline,
} from '@vkontakte/icons';
import { useEffect } from 'react';
import { useFavorite } from '@/store/favorite';

type AboutPage = {
  id: string;
};

export default function AboutPage(props: AboutPage) {
  const router = useRouter();
  const client = useQueryClient();
  const { id } = useParams(Panels.About);
  const { has, add, remove } = useFavorite((select) => ({
    has: select.has,
    add: select.add,
    remove: select.remove,
  }));

  const data = client.getQueryData<APIPlace[]>(['announcement'])?.find((place) => place.id === id);

  const inFavorite = has(data?.id as string);

  const handleClick = () => {
    console.log(inFavorite);
    if (inFavorite) {
      remove(id);
    } else {
      add(id);
    }
  };

  useEffect(() => {
    if (!data) {
      router.popPage();
    }
  }, []);

  if (!data) {
    return <>404</>;
  }

  return (
    <View id={props.id} activePanel={Panels.Favorite}>
      <Panel id={Panels.Favorite}>
        <PanelHeader before={<PanelHeaderClose onClick={() => router.popPage()} />}>
          {data.name}
        </PanelHeader>
        <img src={data.logo} style={{ height: '8em', objectFit: 'cover' }} />

        <Div>
          <Title>{data.address}</Title>
        </Div>

        <Group>
          <SimpleCell before={<Icon28ClockOutline />}>
            <Text>Ежедневно 9:00-23:00</Text>
          </SimpleCell>
        </Group>
        <Group>
          {data.phones.map((phone) => (
            <SimpleCell key={phone} before={<Icon28PhoneOutline />}>
              {phone}
            </SimpleCell>
          ))}
        </Group>
        <Group>
          <SimpleCell before={<Icon28ShareOutline />}>Позвать друзей</SimpleCell>
        </Group>

        <ButtonGroup className="bottom-buttons">
          <Button
            before={inFavorite ? <Icon28UnpinOutline /> : <Icon28PinOutline />}
            className="go-button"
            onClick={handleClick}
          >
            {inFavorite ? 'Не пойду' : 'Пойду'}
          </Button>
        </ButtonGroup>
      </Panel>
    </View>
  );
}
