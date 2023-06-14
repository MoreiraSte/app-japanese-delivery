import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from './stylesMapsRoutes.js'
import Iframe from 'react-iframe'

import { getAuth, signOut } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function MotoboyMaps({navigation}){
    const auth = getAuth();

    const LogOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Home')
           

            
        }).catch((error) => {
            console.log('ERRO AO SAIR')
        });
    }

    return(
        
        <View style={styles.container}>
            <View  style={styles.viewButton} >
        
       
        <TouchableOpacity 
                title='Logout'
                onPress={LogOut}
                style={styles.buttonOut}
            >
                <AntDesign name="logout" size={25} color="black" />
            </TouchableOpacity>
    </View>
            <Iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.1549469870697!2d-47.206985712805945!3d-22.870733883146084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b9553ea07cf9%3A0xf84dd50d877b5195!2sTemakeria.com%20Hortol%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1686742597056!5m2!1spt-BR!2sbr" 
            width="370" height="750" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </View>
    )
}




