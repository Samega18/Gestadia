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
import ViewGray from '../../../components/ViewGray';

function UserAccount(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userAccountTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
                <IconFW name={'create-outline'} size={38} color={'black'} onPress={() => navigation.navigate('UserEditAccount')}/>
            </View>
            <ScrollView style={styles.userAccountScroll}>
                <View style={styles.userAccountTitleContainer}>
                    <Text style={styles.title}>Informações da conta</Text>
                </View>
                <View style={styles.userAccountForms}>
                    <ViewGray label={'Telefone'} valueComponent={'83 9xxxx-xxxx'}/>
                    <ViewGray label={'CPF'} valueComponent={'xxx.xxx.xxx-xx'}/>
                    <ViewGray label={'Email'} valueComponent={'nome@gmail.com'}/>
                    <View style={styles.userAccountLine}/>
                </View>
                <View style={styles.userAccountTitleContainer}>
                    <Text style={styles.title}>Informações pessoais</Text>
                </View>
                <View style={styles.userAccountForms}>
                    <ViewGray label={'Nome completo'} valueComponent={'Genivalda da Costa Pereira'}/>
                    <ViewGray label={'Cidade'} valueComponent={'Campina Grande'}/>
                    <ViewGray label={'Estado'} valueComponent={'Paraíba'}/>
                    <ViewGray label={'Nacionalidade'} valueComponent={'Brasil'}/>
                    <ViewGray label={'Nome da mãe'} valueComponent={'Roberta Pereira Geroninalda'}/>
                    <ViewGray label={'Nome do pai'} valueComponent={'Roberto Carlos da Costa'}/>
                    <ViewGray label={'Cartão do SUS'} valueComponent={'XXX XXXX XXXX XXXX'}/>
                    <ViewGray label={'UNIMED:'} valueComponent={'X XXX XXXXXXXXXXXX X'}/>
                    <View style={styles.userAccountLine}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UserAccount;