import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ViewGray({label, valueComponent}) {

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputView}>
              <Text style={styles.placeholder}>{valueComponent}</Text>
            </View>
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
      inputView: {
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