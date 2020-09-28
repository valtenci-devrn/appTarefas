import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tarefas() {
   return(
      <View style={styles.container}>
          <Text style={styles.texto}>Tarefas</Text>
      </View>
    )
 
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#c51162',
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


   
    