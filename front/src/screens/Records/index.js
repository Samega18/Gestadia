import React,{ Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

import ImgProfile from '../../../assets/user/user_image.png';

import IconFW from '@expo/vector-icons/Ionicons';
import IconMC from '@expo/vector-icons/MaterialCommunityIcons';

const InfoItem = ({type, label, styled}) =>{
    return(
        <View style={[styles.infoItem, styled]}>
            <Text style={styles.infoItemText}>{label}</Text>
        </View>
    )
}

const ButtonBot = ({label, nameIcon}) =>{
    return(
        <TouchableOpacity>
            <View style={styles.buttonMidContainer}>
                <Text style={styles.buttonText}>{label}</Text>
                <IconFW name={nameIcon} size={58} color={'black'}/>
            </View>
        </TouchableOpacity>
    )
}

const ButtonBot2 = ({label, nameIcon}) =>{
    return(
        <TouchableOpacity>
            <View style={styles.buttonMidContainer}>
                <Text style={styles.buttonText}>{label}</Text>
                <IconMC name={nameIcon} size={58} color={'black'}/>
            </View>
        </TouchableOpacity>
    )
}

function Records(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userProfileTop}>
                <View style={styles.topInfoContainer}>
                    <View style={styles.topInfoContainer2}>
                        <InfoItem label='glicemia: 129.0 mg/dL' styled={{borderTopLeftRadius: 4}} />
                        <InfoItem label='Frequencia: 86%' styled={{borderTopRightRadius: 4}}/>
                    </View>
                    <View style={styles.topInfoContainer2}>
                        <InfoItem label='Peso: 80.0 kg' styled={{borderBottomLeftRadius: 4}}/>
                        <InfoItem label='Atividade não respondida' styled={{borderBottomRightRadius: 4}}/>
                    </View>
                </View>
            </View>
            <View style={styles.userProfileMid}>
                <View style={styles.midTextContainer}>
                    <Text style={styles.midText}>Registros</Text>
                </View>
                <View style={styles.midContainer2}>
                    <ButtonBot label='Registro de Atividades física' nameIcon='md-barbell'/>
                    <ButtonBot label='Registro de Alimentação' nameIcon='ios-restaurant'/>
                </View>
                <View style={styles.midContainer2}>
                    <ButtonBot2 label='Registro peso atual' nameIcon='scale'/>
                    <ButtonBot label='Registo da glicemia' nameIcon='md-water'/>
                </View>
            </View>
            <View style={styles.userProfileBottom}>
                <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                    <Text style={styles.buttonText}>Enviar respostas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Records;