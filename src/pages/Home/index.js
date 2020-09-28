import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, Image, ImageBackground, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({navigation}) {

    const [dados, setDados] = useState([]);

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
          if(value !== null) {
            setDados(JSON.parse(value));
          }
        } catch(e) {
          // error reading value
        }
      }

      useEffect(()=> {
        getData();
      },[])

      return (
        <SafeAreaView>
            <View 
                style={styles.header}>
                {/* <Image 
                source={require('../../../assets/img/logo.png')}
                style={{width:30, height:30}}
                resizeMode = "contain"
                /> */}
                <Text style={{color:'#FFF', fontSize:15}}>{dados.nome}</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                >
                <Image 
                source={require('../../../assets/img/logout2.png')}
                style={{width:30, height:30}}
                resizeMode = "contain"
                />
                </TouchableOpacity>
            </View>
            <ImageBackground 
                  source={require('../../../assets/img/img1.jpg')} style={styles.imgBg} >
                </ImageBackground>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      header:{
          backgroundColor:'#6A1B9A',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          padding:10,
          borderBottomWidth:2,
          borderBottomColor:'#FFF',
          marginTop:35
      },
      imgBg:{
        flex:1,
        width: null,
        height: null,
        opacity: 1,
        justifyContent: "flex-start",
        backgroundColor: '#000'
      },
     
    });
    
    

    // container: {
    //     flex: 1,
    //     backgroundColor: '#6A1B9A',
    //     justifyContent: 'center',
    //     alignItems: 'center'
