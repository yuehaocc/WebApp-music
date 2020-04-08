import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style';

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <h1>
        <i className="iconfont">&#xe62b;</i>
      </h1>
    </div>
  );
}

export default App;
