import 'babel-polyfill';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import React, { Component } from 'react';
import AppManager from './store/store';
import App from './containers/app'; // splash screen

const VERSION_NUMBER = 'v0.1';
const APP_NAME = 'demo_app';

export default function native (platform) {
  class DemoApp extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render () {
      const store = AppManager.store;
      store.dispatch(AppManager.store.actions.setField('platform', platform));
      store.dispatch(AppManager.store.actions.setField('versionNumber', VERSION_NUMBER));
      store.dispatch(AppManager.store.actions.setField('appName', APP_NAME));
      return (
        <Provider store={store}>
          <Router sceneStyle={{ backgroundColor: '#ECECEC' }}>
            <Scene key="root" hideNavBar>
              <Scene
                key="App"
                component={App}
                type="replace"
                initial
              />
            </Scene>
          </Router>
        </Provider>
      );
    }
  }
  AppRegistry.registerComponent('mobileDev', () => DemoApp);
}

