import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
               <button onClick={client} style={styles.button}>Client</button>
            </View>
            <View>
               <button style={styles.button}>Admin</button>
            </View>
            <View >
               <button style={styles.button}>Admin</button>
            </View>
            </View>           
        </View>
    )
}