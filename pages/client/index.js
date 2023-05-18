import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from '../client/style'

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
        <Text>TESTE</Text>
        </View>
    )
}