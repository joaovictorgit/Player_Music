import React from 'react';
import { View } from 'react-native';

import { Container, Album, Title } from './style';
import teste from '../../assets/images/placeholder.png';
import { useAudio } from '../../hooks/audio';
const AboutAlbum: React.FC = () => {

  const {currentAudioInfo} = useAudio();

  return (
      <Container>
          <Title>{currentAudioInfo?.title || "Selecio um áudio"}</Title>
          <Album source={{
            uri: currentAudioInfo?.imageSource || teste
          }}></Album>
      </Container>
  );
}

export default AboutAlbum;