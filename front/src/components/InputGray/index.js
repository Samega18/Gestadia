import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function InputGray({label, valueComponent, placeholder}) {

    const [value, setValue] = useState('');

    useEffect(() =>{
        setValue(valueComponent);
    },[])

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            readOnly={false}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={setValue}
            />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
      },
      label: {
        fontSize: 14,
        color: 'black',
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
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
      },
  });