import React, {createContext, useEffect, useState, useContext} from 'react';
import {Audio} from 'expo-av';
import api from '../services/api';
import { playList } from '../services/playlist';
const AudioContext = createContext({});

const AudioProvider: React.FC = ({children}) => {

    const [currentAudio, setCurrentAudio] = useState(null);
    const [currentAudioInfo, setCurrentAudioInfo] = useState();
    const [isPlay, setIsPlay] = useState(false);
    const [playlist, setPlaylist] = useState([{}]);


    const PlaySong = async (source, autoPlay = false) => {
        if(currentAudio){
            await currentAudio.unloadAsync();
        }
        setCurrentAudioInfo(source);
        const {sound} = await Audio.Sound.createAsync({
            uri: source.uri,
        })
        setCurrentAudio(sound);

        if(autoPlay){
            setIsPlay(true);
            await sound.playAsync();
        }

        return;
    };

    const handleToggleAudio = async () => {
        if(isPlay){
            await currentAudio.pauseAsync();
        }else{
            await currentAudio.playAsync();
        }
        setIsPlay((prev) => !prev);
    };

    const handleNextAudio = () => {
        //console.log(currentAudioInfo);
        //console.log(parseInt(currentAudioInfo.id));
        
        const next_sound = playlist[parseInt(currentAudioInfo.id)];
        PlaySong(next_sound, true);
        return;
    };

    const handlePreviousAudio = () => {
        //console.log(currentAudioInfo);
        //console.log(parseInt(currentAudioInfo.id));
        const previous_sond = playlist[parseInt(currentAudioInfo.id)-2];
        PlaySong(previous_sond, true);
        return;
    };

    useEffect(()=>{
        /*async function loadAudio(){
            const result = await api.get('/playlist');
            if(!result.data){
                return ;
            } 
            console.log(result);
            setPlaylist(result.data)
        };

        loadAudio();*/
        setPlaylist(playList);
        console.log(playlist);
    }, [{}]);
    
    return(
        <AudioContext.Provider value={{currentAudioInfo, playlist, handleToggleAudio, PlaySong, isPlay, handleNextAudio, handlePreviousAudio}}>
            {children}
        </AudioContext.Provider>    
    );
};

const useAudio = () =>{
    const context = useContext(AudioContext);
    if(!context) throw new Error("Informe dentro do contexto");
    return context;
};

export {AudioProvider, useAudio};