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

import IconFW from '@expo/vector-icons/Ionicons';
import InputGray from '../../../../components/InputGray';

function UserEditAccount(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userEditAccountTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <ScrollView style={styles.userEditAccountScroll}>
                <View style={styles.userEditAccountTitleContainer}>
                    <Text style={styles.title}>Editar dados</Text>
                </View>
                <View style={styles.userEditAccountTitleContainer}>
                    <Text style={styles.title}>Informações da conta</Text>
                </View>
                <View style={styles.userEditAccountForms}>
                    <InputGray label={'Telefone'} valueComponent={'83 9xxxx-xxxx'}/>
                    <InputGray label={'CPF'} valueComponent={'xxx.xxx.xxx-xx'}/>
                    <InputGray label={'Email'} valueComponent={'nome@gmail.com'}/>
                    <View style={styles.userEditAccountLine}/>
                </View>
                <View style={styles.userEditAccountTitleContainer}>
                    <Text style={styles.title}>Informações pessoais</Text>
                </View>
                <View style={styles.userEditAccountForms}>
                    <InputGray label={'Nome completo'} valueComponent={'Genivalda da Costa Pereira'}/>
                    <InputGray label={'Cidade'} valueComponent={'Campina Grande'}/>
                    <InputGray label={'Estado'} valueComponent={'Paraíba'}/>
                    <InputGray label={'Nacionalidade'} valueComponent={'Brasil'}/>
                    <InputGray label={'Nome da mãe'} valueComponent={'Roberta Pereira Geroninalda'}/>
                    <InputGray label={'Nome do pai'} valueComponent={'Roberto Carlos da Costa'}/>
                    <InputGray label={'Cartão do SUS'} valueComponent={'XXX XXXX XXXX XXXX'}/>
                    <InputGray label={'UNIMED:'} valueComponent={'X XXX XXXXXXXXXXXX X'}/>
                    <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                        <Text style={styles.buttonText}>Salvar informações</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default UserEditAccount;