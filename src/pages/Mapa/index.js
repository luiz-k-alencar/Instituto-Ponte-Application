import React, { Component } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Mapa() {
  return (
    <WebView
      source={{ uri: 'https://goo.gl/maps/EdJ8tNDgv7N3Qd3GA' }}
    />
  );
}
