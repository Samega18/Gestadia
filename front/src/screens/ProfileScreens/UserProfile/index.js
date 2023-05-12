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
import ViewGray from '../../../components/ViewGray';

function UserProfile(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userProfileTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
                <IconFW name={'create-outline'} size={38} color={'black'} onPress={() => navigation.navigate('UserEditProfile')}/>
            </View>
            <View style={styles.userProfileTop2}>
                <Text style={styles.title}>Perfil do Usuário</Text>
            </View>
            <View style={styles.userProfileMid}>
                <View style={styles.midContainer2}>
                    <Image source={ImgProfile} style={styles.imageMid}/>
                </View>
                <View style={styles.midContainer2}>
                    <ViewGray label={'Nome do Perfil'} valueComponent={'Genivalda Pereira'}/>
                </View>
            </View>
            <View style={styles.userProfileBottom}>
                <ViewGray label={'Nome completo'} valueComponent={'Genivalda da costa pereira '}/>
                <ViewGray label={'Cidade'} valueComponent={'Campina Grande'}/>
                <ViewGray label={'Estado'} valueComponent={'Paraíba'}/>
                <ViewGray label={'Outras informações'} valueComponent={''}/>
            </View>
        </View>
    )
}

export default UserProfile;