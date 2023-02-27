import { useFilter } from '@/store/filter';
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
import { useEffect, useState } from 'react';

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
  const { price, setPrice } = useFilter((select) => ({
    price: select.price,
    setPrice: select.setPrice,
  }));

  return (
    <ModalPage id={id} header={<ModalPageHeader>Фильтры</ModalPageHeader>}>
      <FormLayoutGroup mode="horizontal">
        <FormItem top="Цена">
          <Input
            placeholder="От"
            min="0"
            max={price.max}
            value={price.min}
            onChange={(e) => setPrice({ min: +e.target.value, max: price.max })}
          />
        </FormItem>
        <FormItem top="">
          <Input
            placeholder="До"
            min={price.min}
            value={price.max}
            onChange={(e) => setPrice({ max: +e.target.value, min: price.min })}
          />
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
