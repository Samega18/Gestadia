import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const Checkbox = ({ label, value, onChange }) => {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={() => onChange(!value)}>
      <View style={styles.check} >
        {value && <View style={styles.checked} />}
      </View>
      <Text style={styles.labelCheck}>{label}</Text>
    </TouchableOpacity>
  );
};

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    //firebase.auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error.message));
  }

  return (
    <ScrollView /*behavior="height"*/ style={styles.container}>
      <StatusBar backgroundColor={'#351F4D'} animated={true}/>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Cadastrar</Text>
      </View>
      <View style={styles.formContainer}>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#A78BFA"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
            style={styles.input}
            placeholder="exemplo@gmail.com"
            placeholderTextColor="#A78BFA"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>CPF</Text>
            <TextInput
            style={styles.input}
            placeholder="000.000.000-00"
            placeholderTextColor="#A78BFA"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
            style={styles.input}
            placeholder="(83)9xxxx-xxxx"
            placeholderTextColor="#A78BFA"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#A78BFA"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar senha</Text>
            <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            placeholderTextColor="#A78BFA"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
            />
        </View>
        <View style={styles.checkContainer}>
          <Checkbox
            label="Concordo com o termos e políticas"
            value={isChecked}
            onChange={(value) => setIsChecked(value)}
          />
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonContainerB} onPress={() => navigation.navigate('Login')}>
              <Ionicons name="ios-arrow-back-outline" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#351F4D',
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    height: 100,
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
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
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
  checkContainer: {
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 12,
    marginBottom: 12,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#A78BFA',
  },
  labelCheck: {
    fontSize: 16,
    color: 'white',
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

export default RegisterScreen;