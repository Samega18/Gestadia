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

const Option = ({iconName, iconColor, label, screenNav}) =>{

    const navigation = useNavigation();

    const handlePress = () =>{
        navigation.navigate(screenNav);
    }

    return(
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.optionContainer}>
                <View style={styles.optionITContainer}>
                    {/* <IconFW name={iconName} size={32} color={iconColor}/> */}
                    <Text style={styles.optionText}>{label}</Text>
                </View>
                <IconFW name={'ios-chevron-forward'} size={32} color={"#A78BFA"}/>
            </View>
        </TouchableWithoutFeedback>
    )

}

const Address = ({nome, rua, bairro, numero}) =>{

    const navigation = useNavigation();

    const handleEditPress = () =>{
        navigation.navigate('AddressEdit');
    }

    return(
        <View style={styles.addressContainer}>
            <View style={styles.addressTextsContainer}>
                {/* <IconFW name={iconName} size={32} color={iconColor}/> */}
                <Text style={styles.addressText}>Nome do Lugar: {nome}</Text>
                <Text style={styles.addressText}>Rua: {rua}</Text>
                <Text style={styles.addressText}>Bairro: {bairro}</Text>
                <Text style={styles.addressText}>Número: {numero}</Text>
            </View>
            <View style={styles.addressButtonsContainer}>
                {/* <IconFW name={iconName} size={32} color={iconColor}/> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={handleEditPress}>
                        <Text style={styles.buttonText}>Alterar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                        <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

function UserAddress(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userAddressTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <ScrollView style={styles.userAddressScroll}>
                <View style={styles.userAddressAddContainer}>
                    <Option label={'Adicionar endereço'} screenNav={'AddressAdd'}/>
                </View>
                <View style={styles.userAddressForms}>
                    <Address nome={'Casa'} rua={'Rua 1'} bairro={'Bairro 1'} numero={'123'}/>
                    <Address nome={'Casa'} rua={'Rua 1'} bairro={'Bairro 1'} numero={'123'}/>
                    <Address nome={'Casa'} rua={'Rua 1'} bairro={'Bairro 1'} numero={'123'}/>
                    <Address nome={'Casa'} rua={'Rua 1'} bairro={'Bairro 1'} numero={'123'}/>
                    <Address nome={'Casa'} rua={'Rua 1'} bairro={'Bairro 1'} numero={'123'}/>
                    <Address nome={'Casa'} rua={'Rua 1'} bairro={'Bairro 1'} numero={'123'}/>
                    <Address nome={'Casa'} rua={'Rua 1'} bairro={'Bairro 1'} numero={'123'}/>
                    <Address nome={'Casa'} rua={'Rua 1'} bairro={'Bairro 1'} numero={'123'}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UserAddress;