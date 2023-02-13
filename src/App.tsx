import React from 'react';
import { Icon28FireAltOutline, Icon28HomeOutline } from '@vkontakte/icons';
import { AppRoot, SplitCol, Epic, Tabbar, TabbarItem, ScreenSpinner } from '@vkontakte/vkui';
import Home from './views/Home';
import Events from './views/Events';

const App = () => {
  const [activeStory, setActiveStory] = React.useState('home');
  const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);
  return (
    <AppRoot>
      <Epic
        activeStory={activeStory}
        tabbar={
          <Tabbar>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'home'}
              data-story="home"
              text="Главная"
            >
              <Icon28HomeOutline />
            </TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'events'}
              data-story="events"
              text="События"
            >
              <Icon28FireAltOutline />
            </TabbarItem>
          </Tabbar>
        }
      >
        <Home id="home" />
        <Events id="events" />
      </Epic>
    </AppRoot>
  );
};

export default App;
