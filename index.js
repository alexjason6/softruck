/**
 * @format
 */

import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {TrackerProvider} from './src/contexts/trackerContext';

import theme from './src/assets/styles/theme/default';
import Map from './src/pages/Map';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} />
      <TrackerProvider>
        <Map />
      </TrackerProvider>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
