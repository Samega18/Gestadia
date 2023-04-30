import React,{ Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import styles from './styles';

import ImgProfile from '../../../../assets/user/user_image2.png';

import IconFW from '@expo/vector-icons/Ionicons';
import IconMC from '@expo/vector-icons/MaterialCommunityIcons';
import InputGray from '../../../components/InputGray';

function UserConfig(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userConfigTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <ScrollView style={styles.userConfigScroll}>
                <View style={styles.userConfigTitleContainer}>
                    <Text style={styles.title}>Alterar senha</Text>
                </View>
                <View style={styles.userConfigForms}>
                    <InputGray label={'Senha atual'} valueComponent={''}/>
                    <InputGray label={'Nova senha'} valueComponent={''}/>
                    <InputGray label={'Repetir nova senha'} valueComponent={''}/>
                    <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                        <Text style={styles.buttonText}>Alterar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default UserConfig;