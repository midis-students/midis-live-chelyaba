import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import ReactDOM from 'react-dom/client';
import App from './App';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css';
import { RouterContext } from '@happysanta/router';
import { router } from './router';
import { QueryClient, QueryClientProvider } from 'react-query';
import './lib/api';

bridge.send('VKWebAppInit');

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider>
    <AdaptivityProvider>
      <RouterContext.Provider value={router}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </RouterContext.Provider>
    </AdaptivityProvider>
  </ConfigProvider>,
);
