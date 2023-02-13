import { Button, Avatar, ButtonGroup, RichCell } from '@vkontakte/vkui';
import { Icon16Verified } from '@vkontakte/icons';

function getAvatarUrl(params: string) {
  return 'https://web.damirlut.online/pchel.png';
}

type AnnouncementProps = {
  caption: string;
  date: string;
  name: string;
};

export default function Announcement(props: AnnouncementProps) {
  return (
    <RichCell
      before={<Avatar size={48} src={getAvatarUrl('user_ti')} />}
      caption={props.caption}
      after={props.date}
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
      {props.name}
    </RichCell>
  );
}
