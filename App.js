//  #12090C
//  #1C0E12
//  #DDD3BA
//  #2B171C
//  #070405
//  #8C8272

import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topPanel}>
            <Text style={styles.topPanelText}>
              「 Ｗｉｒｅｄ　Ｓｏｕｎｄ 」
            </Text>
        </View>

        <ScrollView>
          
          <View style={styles.inputPanel}>
            <Image
              source={require('./assets/img/os.gif')}
              style={styles.inputPanelLogo}
            />
            <TextInput
              placeholderTextColor="#070304"
              style={styles.inputData}
              placeholder="Username:"
            />
            <TextInput
              placeholderTextColor="#070304"
              style={styles.inputData}
              placeholder="PassWord:"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231517',
  },
  topPanel:{
    backgroundColor: '#070304',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    height: '10%',
    marginTop: 25,
  },
  topPanelText:{
    color: '#BCB193',
  },
  inputPanelLogo:{
    resizeMode: 'contain',
    width: '40%'
  },
  inputPanel:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputData:{    
    backgroundColor: '#DDD3BA',
    width: '60%',
  },
});
