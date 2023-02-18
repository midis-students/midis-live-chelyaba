import Announcement from "@/components/Announcement";
import { Modals } from "@/router";
import { AnnouncementEvents } from "@/types/api";
import { useRouter } from "@happysanta/router";
import { Icon24Filter } from "@vkontakte/icons";
import {
  Card,
  Group,
  List,
  SubnavigationBar,
  SubnavigationButton,
  Touch,
} from "@vkontakte/vkui";
import React from "react";
import "./map-overlay.css";

const filters = [
  { id: "caffe", label: "Кафе" },
  { id: "cinema", label: "Кино" },
  { id: "bar", label: "Бар" },
  { id: "restoran", label: "Ресторан" },
];

const minHeight = 20;
const maxHeight = 85;

const events: AnnouncementEvents[] = [];

const getFormatedDate = (date: Date) =>
  date.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });

for (let i = 0; i < 15; i++) {
  events.push({
    caption: `09:00-23:00`,
    date: getFormatedDate(new Date(`02.${i + 1}.2023`)),
    name: `Шняга №${i}`,
  });
}

export default function MapOverlay() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(maxHeight);

  const router = useRouter();

  const openModal = () => router.pushModal(Modals.Filter);

  const resize = () => {
    setHeight((prev) => (prev === maxHeight ? minHeight : maxHeight));
  };

  return (
    <Group
      className="overlay"
      getRootRef={ref}
      style={{ height: height + "vh" }}
    >
      <SubnavigationBar>
        <SubnavigationButton
          before={<Icon24Filter />}
          expandable
          selected
          onClick={openModal}
        >
          Фильтры
        </SubnavigationButton>
        {filters.map((filter) => (
          <SubnavigationButton key={filter.id}>
            {filter.label}
          </SubnavigationButton>
        ))}
      </SubnavigationBar>
      <Card mode="outline">
        <Touch className="overlay__touch" onClick={resize} />
        <List>
          {events.map((event, index) => (
            <Announcement key={index} {...event} />
          ))}
        </List>
      </Card>
    </Group>
  );
}
