import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Sobre() {
  const [go, setGo] = useState(0);

  switch (go) {
    case 0:
      return (
        <View style={styles.container}>
          <View style={styles.buttonsView}>
            <View>
              <TouchableWithoutFeedback onPress={() => setGo(1)}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> O Instituto </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => setGo(2)}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Seleção de</Text>
                  <Text style={styles.buttonsText}> Alunos</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => setGo(3)}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Projetos </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.buttonsView} >
            <View>
              <TouchableWithoutFeedback onPress={() => setGo(4)}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Como </Text>
                  <Text style={styles.buttonsText}> Atuamos? </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => setGo(5)}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Parceiros </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => setGo(6)}>
                <View style={[styles.button, styles.menu]}>
                  <Text style={styles.buttonsText}> Notícias </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      )
      break

    case 1:
      return (
          <WebView style={{flex:1 }}
            source={{ uri: 'https://reactnative.dev' }}
          />       
      )
      break
    case 2:
      return (
        <WebView
          source={{ uri: 'https://www.nytimes.com/' }}
        />
      )
      break
    case 3:
      return (
        <WebView
          source={{ uri: 'https://www.nytimes.com/' }}
        />
      )
      break
    case 4:
      return (
        <WebView
          source={{ uri: 'https://www.nytimes.com/' }}
        />
      )
      break
    case 5:
      return (
        <WebView
          source={{ uri: 'https://www.nytimes.com/' }}
        />
      )
      break
    case 6:
      return (
        <WebView
          source={{ uri: 'https://www.nytimes.com/' }}
        />
      )
      break
  }
}

/* O Site do IP não está funcionando no momento. Quando ele retornar, lembrar de
trocar as urls */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c4da',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  button: {
    width: 130,
    height: 130,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    }
  },
  menu: {
    backgroundColor: '#797fbb'
  },
  buttonsView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  buttonsText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }
});
