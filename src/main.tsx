import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import ReactDOM from 'react-dom/client';
import App from './App';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css';
import { RouterContext } from '@happysanta/router';
import { router } from './router';

bridge.send('VKWebAppInit');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <RouterContext.Provider value={router}>
        <App />
      </RouterContext.Provider>
    </AdaptivityProvider>
  </ConfigProvider>,
);
