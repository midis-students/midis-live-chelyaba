import { Button, Avatar, ButtonGroup, RichCell } from '@vkontakte/vkui';
import { Icon16Verified } from '@vkontakte/icons';

type AnnouncementProps = {
  caption: string;
  date?: string;
  name: string;
  avatar: string;
};

export default function Announcement(props: AnnouncementProps) {
  return (
    <RichCell
      before={<Avatar size={48} src={props.avatar} loading="lazy" />}
      caption={props.caption}
      after={props?.date}
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
