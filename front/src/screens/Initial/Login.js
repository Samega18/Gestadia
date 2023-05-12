import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, StatusBar } from 'react-native';
import UserService from '../../api/UserService';
import StorageService from '../../api/StorageService';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async() => {

    if(username == ''){
      //alert('Coloque seu Username')
    }else if(password == ''){
      //alert('Coloque sua senha')
    }else{
      const value = await UserService.login(email, password);
    }

    //alert(email+':'+password);

    //alert('Value: '+value.id_token);

    //alert('Token: '+await StorageService.getToken());

    setTimeout(() =>{
      navigation.reset({
           routes: [{name: 'BarNavigate'}]
           });
     }, 100)
    //navigation.navigate('BarNavigate')
    //firebase.auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error.message));
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar backgroundColor={'#A78BFA'} animated={true}/>
      <View style={styles.backgroundImage}>
        <Image source={require('../../../assets/login/login.png')} style={styles.imageFundo} />
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>GESTADIA</Text>
      </View>
      {/* <View style={styles.midContainer}>
        <Image source={require('../../../assets/login/display.png')} style={styles.midImage} />
        <Image source={require('../../../assets/login/image_login.png')} style={styles.midImage2} />
      </View> */}
      <View style={styles.formContainer}>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
            style={styles.input}
            placeholder="Digite seu login"
            placeholderTextColor="#A78BFA"
            autoCapitalize="none"
            autoCorrect={false}
            value={username}
            onChangeText={setUsername}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#A78BFA"
            secureTextEntry={false}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.label2} onPress={() => navigation.navigate('Forgot')}> 
                <Text style={styles.label2}>Esqueceu a senha?</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('Register')}> 
          <Text style={styles.linkText}>Não tem uma conta? Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  backgroundImage: {
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: '#351F4D',
  },
  imageFundo: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '80%',
  },
  logoContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#A78BFA',
    backgroundColor: 'transparent',
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: '15%',
    fontSize: 36,
    fontWeight: 500,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    textAlign: 'center',
    opacity: 0.9
  },
  midContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '105%',
    height: '10%',
    bottom: '54%',
    left: 0,
    zIndex: 1,
  },
  midImage: {
    position: 'absolute',
    resizeMode: 'contain',
    width: '105%',
    bottom: -70,
  },
  midImage2: {
    position: 'absolute',
    resizeMode: 'contain',
    bottom: -100,
    width: '50%',
  },
  formContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#351F4D',
    backgroundColor: 'transparent',
    gap: 20,
  },
  inputContainer: {
    width: '80%',
  },
  label: {
    fontSize: 14,
    color: 'white',
    marginBottom: 2,
    marginLeft: 2,
  },
  label2: {
    fontSize: 16,
    color: 'white',
    marginTop: 4,
    marginLeft: '35%',
  },
  input: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 10,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 10,
    width: '60%',
    height: 50,
    backgroundColor: '#A78BFA',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center'
  },
  linkContainer: {
    marginTop: 20
  },
  linkText: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center'
  }
});

export default LoginScreen;