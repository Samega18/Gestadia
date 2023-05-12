import React,{ Component, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

import ImgProfile from '../../../assets/user/user_image.png';

import IconFW from '@expo/vector-icons/Ionicons';
import IconMC from '@expo/vector-icons/MaterialCommunityIcons';
import { RecordsFisi, RecordsGLice, RecordsInsu, RecordsNutri } from './RecordsViews';

const InfoItem = ({type, label, styled}) =>{
    return(
        <View style={[styles.infoItem, styled]}>
            <Text style={styles.infoItemText}>{label}</Text>
        </View>
    )
}

const ButtonBot = ({label, nameIcon, pressed}) =>{
    return(
        <TouchableOpacity onPress={pressed}>
            <View style={styles.buttonMidContainer}>
                <Text style={styles.buttonText}>{label}</Text>
                <IconFW name={nameIcon} size={58} color={'black'}/>
            </View>
        </TouchableOpacity>
    )
}

const ButtonBot2 = ({label, nameIcon, pressed}) =>{
    return(
        <TouchableOpacity onPress={pressed}>
            <View style={styles.buttonMidContainer}>
                <Text style={styles.buttonText}>{label}</Text>
                <IconMC name={nameIcon} size={58} color={'black'}/>
            </View>
        </TouchableOpacity>
    )
}

function Records(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const [modalIsOpen, setModalIsOpen] = useState('none');
    const [textModal, setTextModal] = useState('');
    const [viewModal, setViewModal] = useState(<View/>);

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    const OpenModal= (buttonValue) =>{
        setModalIsOpen('flex');

        if(buttonValue == 1){
            setTextModal('Quais atividades fisicas fez hoje?')
            setViewModal(<RecordsFisi/>)
        } else if(buttonValue == 2){
            setTextModal('Quais tipos de alimentos comeu hoje?')
            setViewModal(<RecordsNutri/>)
        } else if(buttonValue == 3){
            setTextModal('Fez a aplicação de insulina hoje?')
            setViewModal(<RecordsInsu/>)
        } else if(buttonValue == 4){
            setTextModal('Registre sua Glicemia')
            setViewModal(<RecordsGLice/>)
        }

    }

    const CloseModal= () =>{
        setModalIsOpen('none');
    }

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.userProfileTop}>
                <View style={styles.topInfoContainer}>
                    <View style={styles.topInfoContainer2}>
                        <InfoItem label='glicemia: 129.0 mg/dL' styled={{borderTopLeftRadius: 4}} />
                        <InfoItem label='Frequencia: 86%' styled={{borderTopRightRadius: 4}}/>
                    </View>
                    <View style={styles.topInfoContainer2}>
                        <InfoItem label='Peso: 80.0 kg' styled={{borderBottomLeftRadius: 4}}/>
                        <InfoItem label='Atividade não respondida' styled={{borderBottomRightRadius: 4}}/>
                    </View>
                </View>
            </View>
            <View style={styles.userProfileMid}>
                <View style={styles.midTextContainer}>
                    <Text style={styles.midText}>Registros</Text>
                </View>
                <View style={styles.midContainer2}>
                    <ButtonBot label='Registro de Atividades física' nameIcon='md-barbell' pressed={() => OpenModal(1)}/>
                    <ButtonBot label='Registro de Alimentação' nameIcon='ios-restaurant' pressed={() => OpenModal(2)}/>
                </View>
                <View style={styles.midContainer2}>
                    <ButtonBot2 label='Registro de insulina' nameIcon='needle' pressed={() => OpenModal(3)}/>
                    <ButtonBot label='Registo da glicemia' nameIcon='md-water' pressed={() => OpenModal(4)}/>
                </View>
            </View>
            <View style={styles.userProfileBottom}>
                <TouchableOpacity style={styles.buttonContainer} /* onPress={handleQuit} */>
                    <Text style={styles.buttonText}>Enviar respostas</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.modalRecords, {display: modalIsOpen}]}>
                <View style={styles.modalRecordsTop}>
                    <Text style={styles.modalRecordsTopText}>{textModal}</Text>
                    <IconFW name={'md-close'} size={30} color={'black'} 
                        style={{position: 'absolute', right: 8,}} onPress={CloseModal}/>
                </View>
                <View style={styles.modalRecordsMid}>
                    {viewModal}
                </View>
            </View>
        </View>
    )
}

export default Records;