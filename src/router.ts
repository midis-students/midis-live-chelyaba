import { Page, Router } from '@happysanta/router';

export enum Modals {
  Filter = 'filters',
}

export enum Views {
  Main = 'main',
  Events = 'events',
}

export enum Panels {
  Map = 'map',
  Events = 'events',
}

export enum Pages {
  Map = '/map',
  Events = '/events',
}

const routes = {
  [Pages.Map]: new Page(Panels.Map, Views.Main),
  [Pages.Events]: new Page(Panels.Events, Views.Events),
};

export const router = new Router(routes);

router.start();
