import styles from '../client/styleRegister'
import React,{useState}from 'react';
import { View, Text, TouchableOpacity,Button,TextInput} from 'react-native';
import image_logo from '../images/icon_logo.png'
// import auth from '@react-native-firebase/auth'
import {registerWithEmailAndPassword } from '../config/firebase';


import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function MotoboyRegister({navigation}) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function signUp(){
    registerWithEmailAndPassword(email,password)
    .then(userCredential => {
      console.log('oi')
      Notify.success('User'+userCredential+'criado');
    })
    .catch(error => {
      console.log(error)

      if(error.code === 'auth/email-already-in-use'){
        console.log('email já existe')
        Notify.failure('email já existe');
      }
      if(error.code === 'auth/invalid-email'){
        console.log('email inválido')
        Notify.failure('email inválido');
      }
    });
  }

 
    return (
        <>
      <View  style={styles.container}>
      <View>
            <Text style={styles.texto1}>
                Register Motoboy
            </Text>
            
        </View>
        <View style={styles.btn}>
            <View >
                  <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="User"
                    keyboardType="text"
                  />
            </View>
            <View>
                  <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    keyboardType="text"
                  /> 
             </View>
            <View >
            <TouchableOpacity 
                    title='Choice'
                    onPress={signUp}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Sign Up</Text>
                </TouchableOpacity>

               
            </View>
            <View style={styles.divbtn}>
            <TouchableOpacity 
                    title='Motoboy'
                    onPress={()=> navigation.navigate('MotoboyLogin')}
                    style={styles.buttonSignIn}
                >
                    <Text style={styles.txtButton}>Sign In</Text>
                </TouchableOpacity>

            </View>
            </View>           
      </View>
      
      </>
      
    );
  }
  