import styles from '../client/styleLogin'
import React,{useState} from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';
import image_logo from '../images/icon_logo.png'
// import auth from '@react-native-firebase/auth'
import {logInWithEmailAndPassword} from '../config/firebase';


import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function MotoboyLogin({navigation}) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function signIn(){
    logInWithEmailAndPassword(email,password)
    .then((res)=> {
      console.log(res)
      if (res != false){
        Notify.success('Motoboy logado!'),
        navigation.navigate('MotoboyCorrida')
      }

      }
    )
    .catch(error => console.log(error));
  }

  
    return (
        <>
      <View style={styles.container}>
      <View>
            <Text style={styles.texto1}>
                Login Motoboy
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
                    type='text'
                  /> 
             </View>
            <View >
            <TouchableOpacity 
                    title='MotoboyRegister'
                    onPress={signIn}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Sign In</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.divbtn}>
              <TouchableOpacity 
                      title='MotoboyRegister'
                      onPress={()=> navigation.navigate('MotoboyRegister')}
                      style={styles.buttonSignUp}
                  >
                      <Text style={styles.txtButton}>Sign Up</Text>
                  </TouchableOpacity>
              
            </View>
            </View>           
      </View>
      
      </>
      
    );
  }
  