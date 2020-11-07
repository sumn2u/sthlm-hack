import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class Profile extends React.Component {
  render() {
    return <WebView source={{ uri: 'http://katiparxa.com:8080/' }} style={{ marginTop: 20 }} />;
  }
}