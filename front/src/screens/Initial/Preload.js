import React,{ useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

function PreloadScreen(){

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#A78BFA";
    const colorSecundary = "#F5F5F5";

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async() => {

            // if(valueMan == 0){
            //     //Sistema offline
            //     navigation.reset({
            //     routes: [{name: 'AppManut'}]
            //     });
            // }
            // else if(token != null && emailToken != '' && passToken != ''){
            //     //validar o token 

            //     if(await LogarFB(emailToken, passToken) ==  true){
            //         navigation.reset({
            //             routes: [{name: 'BarNavigate'}]
            //         });
            //     }else{
            //         console.log('Não está logado')
            //         navigation.reset({
            //             routes: [{name: 'Login'}]
            //         });
            //     }
            // } else {
            //     navigation.reset({
            //         routes: [{name: 'Login'}]
            //     });
            // }

            setTimeout(() =>{
                navigation.reset({
                     routes: [{name: 'Login'}]
                     });
            }, 100)

        };

        checkToken();
    }, );

    return(
        <View style={[styles.container, {backgroundColor: colorPrimary}]}>
            <StatusBar backgroundColor={colorPrimary} animated={true}/>
            <View style={styles.imageContainer}>
                {/* <Image style={styles.image} source={IconApp}/> */}
                <Text style={styles.textImage}></Text>
            </View>
            <View style={styles.loading}>
                <ActivityIndicator size={60} color={colorSecundary}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'relative',
        width: "100%",
        height: "100%",
    },
    
    imageContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "auto",
        paddingTop: 70,
    },
    
    image: {
        flex: 1,
        width: "80%",
        height: "auto",
        resizeMode: 'contain',
    },
    
    textImage: {
        flex: 0,
        fontSize: 40,
        color: "white",
        fontWeight: '700',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    loading: {
        flex: 1,
    },
    
});

export default PreloadScreen;