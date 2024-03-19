/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/assets/styles/theme/default';
import Map from './src/pages/Map';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Map />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
