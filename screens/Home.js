import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class Profile extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://lying-economic-roadway.glitch.me/' }} style={{ marginTop: 20 }} />;
  }
}