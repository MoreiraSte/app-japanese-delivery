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
            navigation.navigate('Home')
            Notify.failure('Você saiu da conta');

            
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
                    <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
        </View>
            
        <View style={styles.scroll}>
            <View style={styles.card}>
                <View style={styles.viewTexto}>
                    <Text style={styles.texto1}>{/* TEXTO DO ITEM */}</Text>
                </View>
                <View style={styles.viewItem}>  
                    {/* IMAGEM DO ITEM*/}
                </View>
                <View style={styles.viewPreco}>
                    {/* PREÇO DO ITEM */}
                </View>
                <View style={styles.viewIcon}>
                {/* ICON CARRINHO */}
                </View>
            </View>
        </View>
        
        </View>
    )
}