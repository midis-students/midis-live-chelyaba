import { Page, Router } from '@happysanta/router';

export enum Modals {
  Filter = 'filters',
}

export enum Views {
  Main = 'main',
  Events = 'events',
  Favorite = 'favorite',
  About = 'about',
}

export enum Panels {
  Map = 'map',
  Events = 'events',
  Favorite = 'favorite',
  About = 'about',
}

export enum Pages {
  Map = '/',
  Events = '/events',
  Favorite = '/favorite',
  About = '/about/:id',
}

const routes = {
  [Pages.Map]: new Page(Panels.Map, Views.Main),
  [Pages.Events]: new Page(Panels.Events, Views.Events),
  [Pages.Favorite]: new Page(Panels.Favorite, Views.Favorite),
  [Pages.About]: new Page(Panels.About, Views.About),
};

export const router = new Router(routes);

router.start();
