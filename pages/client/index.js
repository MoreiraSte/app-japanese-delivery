import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import styles from '../client/style'
import { getAuth, signOut } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';



import image_logo from '../images/icon_logo.png'


export default function Home({navigation}){
    const auth = getAuth();

    const LogOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Client')
            Notify.failure('Você saiu da conta');

            
        }).catch((error) => {
            console.log('ERRO AO SAIR')
        });
    }
    return(
        
        <View style={styles.container}>
            <View>
        <TouchableOpacity 
                    title='Logout'
                    onPress={LogOut}
                    style={styles.buttonOut}
                >
                    <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
        </View>
            
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