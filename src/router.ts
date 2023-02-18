import { Page, Router } from '@happysanta/router';

export enum Modals {
  Filter = 'filters',
}

export enum Views {
  Main = 'main',
  Events = 'events',
  Favorite = 'favorite',
}

export enum Panels {
  Map = 'map',
  Events = 'events',
  Favorite = 'favorite',
}

export enum Pages {
  Map = '/',
  Events = '/events',
  Favorite = '/favorite',
}

const routes = {
  [Pages.Map]: new Page(Panels.Map, Views.Main),
  [Pages.Events]: new Page(Panels.Events, Views.Events),
  [Pages.Favorite]: new Page(Panels.Favorite, Views.Favorite),
};

export const router = new Router(routes);

router.start();
