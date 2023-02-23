import { Button, Avatar, ButtonGroup, RichCell } from '@vkontakte/vkui';
import { useRouter } from '@happysanta/router';
import { APIPlace } from '@/lib/api/types';
import { Pages } from '@/router';

type AnnouncementProps = {
  item: APIPlace;
};

export default function Announcement({ item }: AnnouncementProps) {
  const router = useRouter();
  const openAbout = () => router.pushPage(Pages.About, { id: item.id });

  return (
    <RichCell
      before={<Avatar size={48} src={item.logo} loading="lazy" />}
      caption={item.address}
      after={item.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
      actions={
        <ButtonGroup mode="horizontal" gap="s" stretched>
          <Button mode="primary" size="s" onClick={openAbout}>
            Подробнее
          </Button>
        </ButtonGroup>
      }
      multiline
      disabled
    >
      {item.name}
    </RichCell>
  );
}
