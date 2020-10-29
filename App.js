import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from './components/AppHeader'

export default class App extends Component {
 async playSound(url) {
  try {
     await Audio.setIsEnabledAsync(true);
      var playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
    } 
    catch (error) {
      console.log();
    }
}

render() {
  return (
    <View style={{backgroundColor: '#CDFFFF',justifyContent:'center', 
    alignItems:'center', paddingBottom:90, paddingTop:20}}>
    <AppHeader/>
      <View>
        <TouchableOpacity
          style={{
            width: 200,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: '#00B0FF',
            marginTop:20
          }}
          onPress={() => {
            var url =
              'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3';
            this.playSound(url);
          }}>
          <Text> Rock Band Music </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            width: 200,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: '#EC047A',
            borderColor: 'white',
            marginTop:20
          }}
          onPress={() => {
            var url =
              'http://www.suonoelettronico.com/waves22/SKDCR222.mp3';
            this.playSound(url);
          }}>
          <Text> No don't press this </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            width: 200,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: '#87CE03',
            marginTop:20
          }}
          onPress={() => {
            var url =
              'http://www.suonoelettronico.com/waves22/nokia_03.mp3';
            this.playSound(url);
          }} >
          <Text>Bring back those old memories</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            width: 200,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: '#FF3D00',
            marginTop:20
          }}
          onPress={() => {
            var url =
              'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3';
            this.playSound(url);
          }}>
          <Text> Calming Music</Text>
        </TouchableOpacity>
      </View>
  
  <TouchableOpacity
    style={{
      width: 200,
      height: 50,            
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#FF0',
      marginTop:20
    }}
    onPress={() => {
      Audio.setIsEnabledAsync(false);
    }}>
    <Text> Stop All Sound </Text>
  </TouchableOpacity>
</View>
);
 }
}