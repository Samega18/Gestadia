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

import ImgProfile from '../../../../../assets/user/user_image2.png';

import IconFW from '@expo/vector-icons/Ionicons';
import IconMC from '@expo/vector-icons/MaterialCommunityIcons';
import InputGray from '../../../../components/InputGray';

function UserEditProfile(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <ScrollView style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userEditProfileTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.userEditProfileTop2}>
                <Text style={styles.title}>Editar Perfil do Usuário</Text>
            </View>
            {/* <View style={styles.userEditProfileMid}>
                <View style={styles.midContainer2}>
                    <Image source={ImgProfile} style={styles.imageMid}/>
                </View>
                <View style={styles.midContainer2}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleQuit} >
                        <Text style={styles.buttonText}>Editar informações</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>  */}
            <View style={styles.userEditProfileBottom}>
                <InputGray label={'Nome do Perfil'} valueComponent={'Genivalda Pereira'}/>
                <InputGray label={'Nome completo'} valueComponent={'Genivalda da costa pereira '}/>
                <InputGray label={'Cidade'} valueComponent={'Campina Grande'}/>
                <InputGray label={'Estado'} valueComponent={'Paraíba'}/>
                <InputGray label={'Outras informações'} valueComponent={''}/>
                <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                        <Text style={styles.buttonText}>Salvar informações</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default UserEditProfile;