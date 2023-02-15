import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import ReactDOM from 'react-dom/client';
import App from './App';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css';

bridge.send('VKWebAppInit');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
);
