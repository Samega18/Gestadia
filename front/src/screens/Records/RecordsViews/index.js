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

export function RecordsFisi(){

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.scrollContainer2}>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export function RecordsNutri(){

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.scrollContainer2}>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                    <View style={styles.FisiView}></View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export function RecordsInsu(){

    return(
        <View style={styles.containerInsu}>
            <TouchableOpacity style={styles.buttonContainerInsu} /* onPress={handleQuit} */>
                <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainerInsu} /* onPress={handleQuit} */>
                <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
        </View>
    )
}

export function RecordsGLice(){

    return(
        <View style={styles.container}>
            <View style={styles.ContainerGlice}>
                <View style={styles.FisiView}><Text>Manhã</Text></View>
                <View style={styles.FisiView}><Text>Tarde</Text></View>
                <View style={styles.FisiView}><Text>Noite</Text></View>
            </View>
            <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    )
}