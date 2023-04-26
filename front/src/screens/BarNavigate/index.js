import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Button,
    Animated,
    TouchableWithoutFeedback,
    Text,
    Vibration,
    Image,
    View,
  } from 'react-native';
import styles from './styles';

import IconFW from '@expo/vector-icons/Ionicons';
//import IconFound from '@expo/vector-icons/Foundation';

import Home from '../Home';
import Profile from '../Profile';
import Records from '../Records';

const IconBar = ({iconName, label, colorPrimary, colorSecundary, colorTerciary, sizeBar, sizeBar2, selected, valueSelect, change}) =>{

  const [color, setColor] = useState(colorPrimary);

  if(selected == valueSelect){

  }

  return(
    <View style={styles.iconContainer}>
      <TouchableWithoutFeedback onPress={change}>
      <IconFW name={selected == valueSelect ? iconName : iconName+"-outline"} size={sizeBar}
        color={selected == valueSelect ? colorSecundary : colorTerciary}/>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={change}>
      <Text style={[styles.iconLabel, {color: selected == valueSelect ? colorSecundary : colorTerciary}]}>
        {label}</Text>
      </TouchableWithoutFeedback>
    </View>
  )

}

function BarNavigate({ navigation }){

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#7C3AED";
    const colorSecundary = "#F5F5F5";
    const colorTerciary = "gray";
    
    const [ screenSelected, setScreenSelected ] = useState(0);

    function changeScreen(value){
      setScreenSelected(value);
      Vibration.vibrate(50);
    }

    return (
      <View style={[ styles.container, { backgroundColor: colorSecundary }]}>
        <StatusBar backgroundColor={colorPrimary} animated={true}/>
        <View style={[ styles.screen, { backgroundColor: colorSecundary }]}>
          {screenSelected == 0 && <Home/>}
          {screenSelected == 1 && <Records/>}
          {screenSelected == 2 && <Profile/>}

        </View>
        <View style={[ styles.barNavigateContainer, { backgroundColor: colorSecundary, borderColor: "#A78BFA"}]}>
          <IconBar iconName="home" label="Início" sizeBar={32} colorPrimary="black" change={() =>changeScreen(0)}
            colorSecundary={colorPrimary} selected={screenSelected} valueSelect={0} sizeBar2={42} colorTerciary={colorTerciary}/>
          <IconBar iconName="clipboard" label="Registros" sizeBar={32} colorPrimary="black" change={() => changeScreen(1)}
            colorSecundary={colorPrimary} selected={screenSelected} valueSelect={1} sizeBar2={42} colorTerciary={colorTerciary}/>
          <IconBar iconName="person" label="Perfil" sizeBar={32} colorPrimary="black" change={() => changeScreen(2)}
            colorSecundary={colorPrimary} selected={screenSelected} valueSelect={2} sizeBar2={42} colorTerciary={colorTerciary}/>
        </View>
      </View>
    );
  };

export default BarNavigate;