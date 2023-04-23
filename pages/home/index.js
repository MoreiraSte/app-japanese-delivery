import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from './style.js'

import client from '../client/login.js'


export default function Home({navigation}){
    return(
        
        <View style={styles.container}>
            
            <View>
            <Text style={styles.texto1}>
                Japanese Delivery
            </Text>
        </View>
        <View style={styles.btn}>
            <View >
            <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.button}
                >
                    <Text >Login</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton} >Login</Text>
                </TouchableOpacity>  
             </View>
            <View >
            <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.button}
                >
                    <Text >Login</Text>
                </TouchableOpacity>
                        </View>
            </View>           
        </View>
    )
}