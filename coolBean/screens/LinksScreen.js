import React from 'react';
import {View,ImageBackground, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  state = {
    added:false
  }
  render (){
    const {navigate} = this.props.navigation;
    if (!this.state.added){
      return (
        <View style={{ flex: 1 }}>
          <ImageBackground source={require('../images/background2.png') } style={{width: '110%', height: '108%',right:60,bottom:43,flex: 1 }}>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
        <ImageBackground source={require('../images/background3.png') } style={{width: '120%', height: '105%',right:85,bottom:43,flex: 1 }}>
        </ImageBackground>
      </View>
      );
    }
  }

}

LinksScreen.navigationOptions = {
  title: 'List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
