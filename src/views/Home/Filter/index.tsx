import {
  FormItem,
  FormLayout,
  FormLayoutGroup,
  Input,
  ModalPage,
  ModalPageHeader,
  Radio,
  Select,
} from '@vkontakte/vkui';

const regions = [
  { label: 'Курчатовской район', value: '0' },
  { label: 'Калининский район', value: '1' },
  { label: 'Ленинский район', value: '2' },
  { label: 'Металлургический район', value: '3' },
  { label: 'Советский район', value: '4' },
  { label: 'Тракторозаводский район', value: '5' },
  { label: 'Центральный район', value: '6' },
];

export default function Filter({ id, closeModal }: { id: string; closeModal: () => void }) {
  return (
    <ModalPage id={id} header={<ModalPageHeader>Фильтры</ModalPageHeader>}>
      <FormLayoutGroup mode="horizontal">
        <FormItem top="Цена">
          <Input placeholder="От" />
        </FormItem>
        <FormItem top="">
          <Input placeholder="До" />
        </FormItem>
      </FormLayoutGroup>
      {/*
      <FormItem top="Где искать">
        <Select placeholder="Район" options={regions} />
      </FormItem>

      <FormLayout>
        <FormItem top="Сортировка">
          <Radio name="radio" value="1" defaultChecked>
            По умолчанию
          </Radio>
          <Radio name="radio" value="2">
            По удалёности
          </Radio>
          <Radio name="radio" value="3">
            Дороже
          </Radio>
          <Radio name="radio" value="4">
            Дешевле
          </Radio>
        </FormItem>

      </FormLayout>

  */}
    </ModalPage>
  );
}
