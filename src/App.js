import React from 'react';

import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index';

import { Provider } from 'react-redux';
import store from './store/index';

import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>

  );
}

export default App;
