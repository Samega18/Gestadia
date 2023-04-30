import React,{ Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

import IconFW from '@expo/vector-icons/Ionicons';

const Option = ({iconName, iconColor, label, screenNav}) =>{

    const navigation = useNavigation();

    const handlePress = () =>{
        navigation.navigate(screenNav);
    }

    return(
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.optionContainer}>
                <View style={styles.optionITContainer}>
                    <IconFW name={iconName} size={32} color={iconColor}/>
                    <Text style={styles.optionText}>{label}</Text>
                </View>
                <IconFW name={'ios-chevron-forward'} size={32} color={"#A78BFA"}/>
            </View>
        </TouchableWithoutFeedback>
    )

}

function Profile(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const handleQuit = () =>{
        navigation.navigate('Preload');
    }

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.containerTop}>
               <Text style={styles.topName}>Genivalda Pereira</Text>
            </View>
            <View style={styles.containerMid}>
               <Option iconName={'person-outline'} iconColor={"#7C3AED"} label={"Perfil de Usuário"} screenNav={'UserProfile'}/>
               <Option iconName={'list-outline'} iconColor={"#7C3AED"} label={"Conta de Usuário"} screenNav={'UserAccount'}/>
               <Option iconName={'location-outline'} iconColor={"#7C3AED"} label={"Endereços"} screenNav={'UserAddress'}/>
               <Option iconName={'clipboard-outline'} iconColor={"#7C3AED"} label={"Prontuário Eletrônico"} screenNav={'UserPEP'}/>
               <View style={styles.spaceOptions}></View>
               <Option iconName={'md-settings-outline'} iconColor={"#7C3AED"} label={"Configurações"} screenNav={'UserProfile'}/>
               <Option iconName={'md-help-circle-outline'} iconColor={"#7C3AED"} label={"Ajuda"} screenNav={'UserProfile'}/>
               <Option iconName={'md-information-circle-outline'} iconColor={"#7C3AED"} label={"Sobre"} screenNav={'UserProfile'}/>
            </View>
            <View style={styles.containerBottom}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleQuit}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;