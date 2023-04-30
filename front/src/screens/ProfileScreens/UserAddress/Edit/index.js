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
import IconMC from '@expo/vector-icons/MaterialCommunityIcons';
import InputGray from '../../../../components/InputGray';

function AddressEdit(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.addressEditTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <ScrollView style={styles.addressEditScroll}>
                <View style={styles.addressEditTitleContainer}>
                    <Text style={styles.title}>Editar Endereço</Text>
                </View>
                <View style={styles.addressEditForms}>
                    <InputGray label={'Nome do Lugar'} placeholder={'Casa, Trabalho…'}/>
                    <InputGray label={'Rua'} placeholder={'Digite a Rua'}/>
                    <InputGray label={'Bairro'} placeholder={'Digite o Bairro'}/>
                    <InputGray label={'Cidade'} placeholder={'Digite a Cidade'}/>
                    <InputGray label={'Estado'} placeholder={'Digite o Estado'}/>
                    <InputGray label={'CEP'} placeholder={'Digite o CEP'}/>
                    <InputGray label={'Numero'} placeholder={'Digite o Numero'}/>
                    <InputGray label={'Complemento'} placeholder={'Digite o Complemento'}/>
                    <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default AddressEdit;