import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'modules/store';
import App from 'layouts/index';

import './styles/reset.css'
import 'tdesign-react/es/style/index.css';

import './styles/theme.less';
import './styles/index.less';


const env = import.meta.env.MODE || 'development';
const baseRouterName = env === 'site' ? '/starter/react/' : '';

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={baseRouterName}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

renderApp();
