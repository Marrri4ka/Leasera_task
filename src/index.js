import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {
  AppContainer
} from 'react-hot-loader';
import {
  HashRouter
} from 'react-router-dom';


const render = (Component) => {
  ReactDOM.render(<div><AppContainer>
    <HashRouter>
      <Component/>
    </HashRouter>
  </AppContainer></div>, document.getElementById('root'));
};


render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}

serviceWorker.unregister();