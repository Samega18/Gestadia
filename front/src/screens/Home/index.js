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

import ImgProfile from '../../../assets/user/user_image.png';
import GraphicHome from '../../../assets/home/graphic_home2.png';

const ButtonBot = ({label, nameIcon, screenNav}) =>{

    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.navigate(screenNav)}>
            <View style={styles.buttonBottomContainer}>
                <Text style={styles.buttonText}>{label}</Text>
                <IconFW name={nameIcon} size={58} color={'black'}/>
            </View>
        </TouchableOpacity>
    )
}

function Home(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.homeTop}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Notifications')}>
                    <IconFW name={'notifications-outline'} size={42} color={'#7C3AED'}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('UserProfile')}>
                    <Image source={ImgProfile} style={styles.imageTop}/>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.homeMid}>
                <View style={styles.textContainerMid}>
                    <Text style={styles.textMid}>Ola! Genivalda pereira</Text>
                    <Text style={styles.textMid2}>É um otimo dia para se cuidar</Text>
                </View>
                <Image source={GraphicHome} style={styles.imageMid}/>
                {/* <View style={styles.graphicContainerMid}>
                    <Image source={GraphicHome} style={styles.imageMid}/>
                </View> */}
            </View>
            <View style={styles.homeBottom}>
                <View style={styles.bottomContainer2}>
                    <ButtonBot label='Lembretes' nameIcon='ios-megaphone' screenNav={'Reminders'} />
                    <ButtonBot label='Dicas gerais' nameIcon='ios-information-circle' screenNav={'TipsAll'}/>
                </View>
                <View style={styles.bottomContainer2}>
                    <ButtonBot label='Dicas nutricionais' nameIcon='ios-restaurant' screenNav={'TipsNutri'}/>
                    <ButtonBot label='Dicas de atividades físicas' nameIcon='md-barbell' screenNav={'TipsFisi'}/>
                </View>
            </View>
        </View>
    )
}

export default Home;