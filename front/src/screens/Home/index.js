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
} from 'react-native';
import styles from './styles';

function Home(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.containerTop}>
                <View style={styles.homeTop}>

                </View>
                <View style={styles.homeMid}>
                    <Text style={{color: 'black'}}>Home</Text>
                </View>
                <View style={styles.homeBottom}>

                </View>
            </View>
            <View style={styles.containerBottom}>
                
            </View>
        </View>
    )
}

export default Home;