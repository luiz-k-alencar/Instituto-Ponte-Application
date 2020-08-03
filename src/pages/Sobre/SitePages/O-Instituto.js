import React from 'react';
import WebView from 'react-native-webview'

export default function Instituto() {
  return (
    <WebView style={{ flex: 1 }}
      source={{ uri: 'https://www.institutoponte.org.br/quem-somos/' }}
    />
  );
}