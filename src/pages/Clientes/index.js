import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Clientes() {
   return(
      <View style={styles.container}>
          <Text style={styles.texto}>Clientes</Text>
      </View>
    )
 
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#4a148c',
            justifyContent: 'center',
            alignItems: 'center'
            
        },
        texto: {
            color: '#FFFF',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            fontWeight: 'bold'
        }
     
    });