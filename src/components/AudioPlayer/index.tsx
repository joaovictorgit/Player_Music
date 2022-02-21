import React from 'react';
import {Feather} from '@expo/vector-icons';
import { Container, ButtonContaier, ButtonAction } from './style';
import { useAudio } from '../../hooks/audio';

const AudioPlayer: React.FC = () => {

    const {isPlay, handleToggleAudio, handleNextAudio, handlePreviousAudio} = useAudio();

  return (
    <Container>
        <ButtonContaier>
            <ButtonAction>
                <Feather name='chevron-left' size={24} color='black' onPress={handlePreviousAudio}/>
            </ButtonAction>
            <ButtonAction primary onPress={handleToggleAudio}>
                <Feather name={isPlay ? 'pause' : 'play'} size={32} color='white'/>
            </ButtonAction>
            <ButtonAction>
                <Feather name='chevron-right' size={24} color='black' onPress={handleNextAudio}/>
            </ButtonAction>
        </ButtonContaier>
    </Container>
  );
}

export default AudioPlayer;