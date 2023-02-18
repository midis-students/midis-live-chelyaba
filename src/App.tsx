import React from 'react';
import { Icon28FavoriteOutline, Icon28FireAltOutline, Icon28HomeOutline } from '@vkontakte/icons';
import { AppRoot, Epic, Tabbar, TabbarItem, ModalRoot, SplitLayout } from '@vkontakte/vkui';
import Home from './views/Home';
import Events from './views/Events';
import { Modals, Pages, Views } from './router';
import { useLocation, useRouter } from '@happysanta/router';
import Filter from './views/Home/Filter';
import Favorite from './views/Favorite';
import { Locale } from './locale';
import { useSnackbar } from './store/Snackbar';

const App = () => {
  const snackbar = useSnackbar((select) => select.current);
  const location = useLocation();
  const router = useRouter();

  const modals = (
    <ModalRoot activeModal={location.getModalId()} onClose={() => router.popPage()}>
      <Filter id={Modals.Filter} closeModal={() => router.popPage()} />
    </ModalRoot>
  );

  const activeStory = location.getViewId();
  const onStoryChange = (e: any) => router.pushPage(e.currentTarget.dataset.story);

  const tabs = [
    {
      view: Views.Main,
      page: Pages.Map,
      label: Locale.pages.main,
      icon: <Icon28HomeOutline />,
    },
    {
      view: Views.Events,
      page: Pages.Events,
      label: Locale.pages.events,
      icon: <Icon28FireAltOutline />,
    },
    {
      view: Views.Favorite,
      page: Pages.Favorite,
      label: Locale.pages.favorite,
      icon: <Icon28FavoriteOutline />,
    },
  ];

  return (
    <AppRoot>
      <SplitLayout modal={modals}>
        <Epic
          activeStory={activeStory}
          tabbar={
            <Tabbar>
              {tabs.map((tab) => (
                <TabbarItem
                  key={tab.view}
                  data-story={tab.page}
                  text={tab.label}
                  onClick={onStoryChange}
                  selected={activeStory === tab.view}
                >
                  {tab.icon}
                </TabbarItem>
              ))}
            </Tabbar>
          }
        >
          <Home id={Views.Main} />
          <Events id={Views.Events} />
          <Favorite id={Views.Favorite} />
        </Epic>
        {snackbar}
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
