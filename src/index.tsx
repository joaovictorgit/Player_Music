import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Background } from './style';
import Player from './pages/Player';
import {AudioProvider, useAudio} from './hooks/audio'

const Main: React.FC = () => {

  

  return (
      <AudioProvider>
        <StatusBar style='light'/>
        <Background>
            
            <Player/>
        </Background>
      </AudioProvider>
  );
}

export default Main;