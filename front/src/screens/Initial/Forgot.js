import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSendPass = () => {
    navigation.navigate('Forgot2')
    //firebase.auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error.message));
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar backgroundColor={'#351F4D'} animated={true}/>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Recuperar Senha</Text>
      </View>
      <View style={styles.formContainer}>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail/Telefone</Text>
            <TextInput
            style={styles.input}
            placeholder="exemplo@gmail.com/(83)9xxxx-xxxx"
            placeholderTextColor="#A78BFA"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonContainerB} onPress={() => navigation.navigate('Login')}>
              <Ionicons name="ios-arrow-back-outline" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSendPass}>
              <Text style={styles.buttonText}>Enviar código</Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#351F4D',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 500,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    textAlign: 'center',
    opacity: 0.9
  },
  formContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
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
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  buttonContainerB: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '20%',
    height: 50,
    backgroundColor: '#A78BFA',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '56%',
    height: 50,
    backgroundColor: '#A78BFA',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
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
    color: '#FFF',
    textAlign: 'center'
  }
});

export default ForgotScreen;