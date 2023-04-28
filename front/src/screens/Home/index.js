import React,{ Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import IconFW from '@expo/vector-icons/Ionicons';

const ButtonBot = ({label, nameIcon}) =>{
    return(
        <TouchableOpacity>
            <View style={styles.buttonBottomContainer}>
                <Text style={styles.buttonText}>{label}</Text>
                <IconFW name={nameIcon} size={58} color={'black'}/>
            </View>
        </TouchableOpacity>
    )
}

function Home(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.homeTop}>

            </View>
            <View style={styles.homeMid}>
                <Text style={{color: 'black'}}>Home</Text>
            </View>
            <View style={styles.homeBottom}>
                <View style={styles.bottomContainer2}>
                    <ButtonBot label='Lembretes' nameIcon='notifications'/>
                    <ButtonBot label='Dicas gerais' nameIcon='ios-information-circle'/>
                </View>
                <View style={styles.bottomContainer2}>
                    <ButtonBot label='Dicas nutricionais' nameIcon='ios-restaurant'/>
                    <ButtonBot label='Dicas de atividades físicas' nameIcon='md-barbell'/>
                </View>
            </View>
        </View>
    )
}

export default Home;