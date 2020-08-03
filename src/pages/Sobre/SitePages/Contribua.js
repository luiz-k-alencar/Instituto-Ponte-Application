import React from 'react';
import WebView from 'react-native-webview'

export default function Contribua() {
  return (
    <WebView style={{ flex: 1 }}
      source={{ uri: 'https://www.institutoponte.org.br/contribua/' }}
    />
  );
}