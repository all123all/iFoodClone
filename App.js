import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity,} from 'react-native';
import { Image } from 'react-native-elements';

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
            <View style={styles.inputPanelLogo}>
              <Image 
                source={require('./assets/img/os1.gif')}
                containerStyle={styles.inputPanelLogoPic}
              />
            </View>
            <TextInput
              placeholderTextColor="#070304"
              style={styles.inputData}
              placeholder="u s e r"
              placeholderTextColor="#8C8272"
            />
            <TextInput
              placeholderTextColor="#070304"
              style={styles.inputData}
              placeholder="p a s s c o d e"
              placeholderTextColor="#8C8272"
            />
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={{color: '#BCB193', padding: '2%'}}>L o g i n</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={{color: '#BCB193', padding: '2%'}}>S i g n u p</Text>
            </TouchableOpacity>
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
  inputPanel:{
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputData:{    
    backgroundColor: '#DDD3BA',
    width: '60%',
    marginTop: '2%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BCB193',
    padding: '2%',
  },
  btnLogin:{
    width: '60%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BCB193',
    backgroundColor: 'transparent',
    marginTop: '2%',
    alignItems: 'center',
  },
});

//  #12090C
//  #1C0E12
//  #DDD3BA
//  #2B171C
//  #070405
//  #8C8272
