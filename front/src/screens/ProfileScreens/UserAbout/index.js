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

const Option = ({label, screenNav}) =>{

    const navigation = useNavigation();

    const handlePress = () =>{
        // navigation.navigate(screenNav);
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

function UserAbout(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userAboutTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.userAboutOptionsContainer}>
                <Option label={'Política de Privacidade'}/>
                <Option label={'Termos de Uso'}/>
            </View>
        </View>
    )
}

export default UserAbout;