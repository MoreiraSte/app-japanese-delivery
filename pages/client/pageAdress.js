import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Button, Image ,TextInput} from 'react-native';
import styles from '../client/styleAdress'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { collection, getDocs,doc, deleteDoc,addDoc} from 'firebase/firestore'
import {db} from '../config/firebase';

import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function PageConfirm({navigation}){

  const [cidade,setCidade] = useState('')
  const [bairro,setBairro] = useState('')
  const [rua,setRua] = useState('')
  const [numero,setNumero] = useState('')
  const [cep,setCep] = useState('')

  function adicionar() {
    addDoc(collection(db, 'Adress'), {
      cidade: cidade,
      bairro: bairro,
      rua: rua,
      numeroCasa: numero,
      cep:cep
    })

    setCidade('')
    setBairro('')
    setRua('')
    setNumero('')
    setCep('')

    Notify.success('Endereço adicionado!');
    navigation.navigate('Confirm')
    
  }
     
    return(
        
        <View style={styles.container}>

                <Text style={styles.txt}>Your Adress</Text>

                
                <View >
                  <TextInput
                    style={styles.input}
                    onChangeText={setCidade}
                    value={cidade}
                    placeholder="City"
                    keyboardType="text"
                  />
                    </View>

                    <View >
                  <TextInput
                    style={styles.input}
                    onChangeText={setBairro}
                    value={bairro}
                    placeholder="Neighborhood"
                    keyboardType="text"
                  />
                    </View>

                    <View style={styles.viewbtn}>
                  <TextInput
                    style={styles.input}
                    onChangeText={setRua}
                    value={rua}
                    placeholder="Road"
                    keyboardType="text"
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={setNumero}
                    value={numero}
                    placeholder="House Number"
                    keyboardType="text"
                  />
                    </View>

                    <View >
                  <TextInput
                    style={styles.input}
                    onChangeText={setCep}
                    value={cep}
                    placeholder="CEP"
                    keyboardType="text"
                  />
                    </View>
                <TouchableOpacity
                 style={styles.buttonDiv}
                  onPress={adicionar}
                >
                    <Text style={styles.txtButton}>Confirm</Text>
                </TouchableOpacity>
            </View>
      
            
        
    )
}