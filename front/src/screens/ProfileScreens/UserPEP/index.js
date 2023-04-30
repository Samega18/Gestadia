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

import ImgProfile from '../../../../assets/user/user_image2.png';

import IconFW from '@expo/vector-icons/Ionicons';
import IconMC from '@expo/vector-icons/MaterialCommunityIcons';
import InputGray from '../../../components/InputGray';

function UserPEP(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userPEPTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.userPEPMid}>
                <Text style={styles.title}>Prontuário Eletrônico</Text>
            </View>
            <View style={styles.userPEPBottom}>
                <View style={styles.bottomContainer2}>
                    <Text style={styles.title}>Informações da gestante</Text>
                </View>
            </View>
        </View>
    )
}

export default UserPEP;