import { Icon24UserAddOutline, Icon16Verified } from '@vkontakte/icons';
import {
  View,
  Panel,
  Group,
  PanelHeader,
  Button,
  Avatar,
  ButtonGroup,
  Header,
  RichCell,
  UsersStack,
} from '@vkontakte/vkui';

function getAvatarUrl(params: string) {
  return 'https://web.damirlut.online/pchel.png';
}

export default function Announcement() {
  <View activePanel="list">
    <Panel id="list">
      <PanelHeader>RichCell</PanelHeader>
      <Group>
        <RichCell
          before={<Avatar size={72} src={getAvatarUrl('')} />}
          subhead="Subhead"
          text="Text"
          caption="Caption"
          after="After"
          afterCaption="After Caption"
          actions={
            <ButtonGroup mode="horizontal" gap="s" stretched>
              <Button mode="primary" size="s">
                Primary
              </Button>
              <Button mode="secondary" size="s">
                Secondary
              </Button>
            </ButtonGroup>
          }
          disabled
        ></RichCell>
      </Group>
      <Group header={<Header>События</Header>}>
        <RichCell
          before={<Avatar size={48} src={getAvatarUrl('user_ti')} />}
          caption="9:00-18:00"
          after="13 фев"
          actions={
            <ButtonGroup mode="horizontal" gap="s" stretched>
              <Button mode="primary" size="s">
                Принять
              </Button>
              <Button mode="secondary" size="s">
                Отклонить
              </Button>
            </ButtonGroup>
          }
          multiline
          disabled
        >
          Тарас Иванов{' '}
          <Icon16Verified
            style={{
              display: 'inline-block',
              color: 'var(--vkui--color_icon_accent)',
              verticalAlign: 'text-top',
            }}
          />
        </RichCell>
        <RichCell
          before={<Avatar size={48} src={getAvatarUrl('user_lihachyov')} />}
          caption="9:00-18:00"
          after="13 фев"
        >
          Михаил Лихачев
        </RichCell>
      </Group>
    </Panel>
  </View>;
}
