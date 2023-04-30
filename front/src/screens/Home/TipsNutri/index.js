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
                <IconFW name={'ios-chevron-forward'} size={32} color={"#A78BFA"}/>
            </View>
        </TouchableWithoutFeedback>
    )

}


function TipsNutri(){
    
    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.tipsNutriTop}>
                <IconFW name={'arrow-back'} size={42} color={'black'} onPress={() => navigation.goBack()}/>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.tipsNutriMid}>
                    <Text style={styles.midText}>Dicas de Nutrição</Text>
                </View>
                <View style={styles.tipsNutriOptionsContainer}>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                    <Option label={'Como utilizar da melhor maneira o seu aplicativo'}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default TipsNutri;