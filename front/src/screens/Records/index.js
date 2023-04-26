import React,{ Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const Item = ({name, route}) =>{

    return(
        <View style={styles.itemContainer}>
            <View style={styles.itemElipse}/>
            <Text style={styles.itemText}>
                {name}
            </Text>    
        </View>
    )

}

function Records(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.recordsTop}>
                <View style={styles.topInfoContainer}>

                </View>
            </View>
            <View style={styles.recordsMid}>
                <Item name={'Registro de Atividades Física'}/>
                <Item name={'Registo de Alimentação'}/>
                <Item name={'Registro de dados sobre peso'}/>
                <Item name={'Registo de dados sobre glicemia'}/>
            </View>
            <View style={styles.recordsBottom}>
                <View style={styles.bottomBalls}>
                    <View style={styles.itemElipse}/>
                    <View style={styles.itemElipse}/>
                    <View style={styles.itemElipse}/>
                    <View style={styles.itemElipse}/>
                    <View style={styles.itemElipse2}/>
                </View>
                <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                    <Text style={styles.buttonText}>Enviar respostas</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Records;