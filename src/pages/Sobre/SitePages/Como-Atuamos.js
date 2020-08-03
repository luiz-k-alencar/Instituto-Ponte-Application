import React from 'react';
import WebView from 'react-native-webview'

export default function Atuação() {
  return (
    <WebView style={{ flex: 1 }}
      source={{ uri: 'https://www.institutoponte.org.br/como-atuamos/' }}
    />
  );
}