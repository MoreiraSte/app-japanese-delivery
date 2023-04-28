import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from './style.js'

import admin from '../admin/login.js'
import image_logo from '../images/icon_logo.png'


export default function Home({navigation}){
    return(
        
        <View style={styles.container}>
            
            <View>
            <Text style={styles.texto1}>
                Japanese Delivery
            </Text>

            <img style={styles.img_logo} alt='logo' src={image_logo}/>
        </View>
        <View style={styles.btn}>
            <View >
            <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Admin</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity 
                    title='Client'
                    onPress={()=> navigation.navigate('Client')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton} >Client</Text>
                </TouchableOpacity>  
             </View>
            <View >
            <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Motoboy</Text>
                </TouchableOpacity>
                        </View>
            </View>           
        </View>
    )
}