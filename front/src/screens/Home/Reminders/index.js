import React,{ Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import IconFW from '@expo/vector-icons/Ionicons';

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
                    {/* <IconFW name={'ios-chevron-forward'} size={32} color={"#A78BFA"}/> */}
            </View>
        </TouchableWithoutFeedback>
    )

}


function Reminders(){
    
    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.remindersTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.remindersMid}>
                <Text style={styles.midText}>Lembretes</Text>
            </View>
            <View style={styles.remindersOptionsContainer}>
                <Option label={'Lembre de reduzir o açucar, sua glicemia está alta'}/>
                <Option label={'Continue fazendo exercicios, seu desempenho ta muito bom!'}/>
            </View>
        </View>
    )
}

export default Reminders;