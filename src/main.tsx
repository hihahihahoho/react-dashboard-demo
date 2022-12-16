import ReactDOM from 'react-dom/client';
import './styles/index.less';
import store from './stores';
import { Provider } from 'react-redux';
import App from './App';
import './mock';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
