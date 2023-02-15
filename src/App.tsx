import React from 'react';
import { Icon28FireAltOutline, Icon28HomeOutline } from '@vkontakte/icons';
import {
  AppRoot,
  SplitCol,
  Epic,
  Tabbar,
  TabbarItem,
  ScreenSpinner,
  Card,
  ModalRoot,
  SplitLayout,
} from '@vkontakte/vkui';
import Home from './views/Home';
import Events from './views/Events';
import { Modals, Pages, router, Views } from './router';
import { Page, useLocation, useRouter } from '@happysanta/router';
import Filter from './views/Home/Filter';

const App = () => {
  const location = useLocation();
  const router = useRouter();

  React.useEffect(() => {
    router.pushModal(Modals.Filter);
  }, []);

  const modals = (
    <ModalRoot activeModal={location.getModalId()} onClose={() => router.popPage()}>
      <Filter id={Modals.Filter} closeModal={() => router.popPage()} />
    </ModalRoot>
  );

  const activeStory = location.getViewId();
  const onStoryChange = (e: any) => router.pushPage(e.currentTarget.dataset.story);

  return (
    <AppRoot>
      <SplitLayout modal={modals}>
        <Epic
          activeStory={activeStory}
          tabbar={
            <Tabbar>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === Views.Main}
                data-story={Pages.Map}
                text="Главная"
              >
                <Icon28HomeOutline />
              </TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === Views.Events}
                data-story={Pages.Events}
                text="События"
              >
                <Icon28FireAltOutline />
              </TabbarItem>
            </Tabbar>
          }
        >
          <Home id={Views.Main} />
          <Events id={Views.Events} />
        </Epic>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
