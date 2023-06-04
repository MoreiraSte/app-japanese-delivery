import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Button, Image ,TextInput} from 'react-native';
import styles from '../client/stylePagar'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { collection, getDocs,doc, deleteDoc,addDoc} from 'firebase/firestore'
import {db} from '../config/firebase';

import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function pagePagar({navigation}){

  const [tipoPagamento,setTipoPagamento] = useState('')
  const [valor,setValor] = useState('')
 

  function adicionar() {
    addDoc(collection(db, 'pagamento'), {
      tipoPagamento: tipoPagamento,
      valor: valor,
   
    })

    setTipoPagamento('')
    setValor('')
    

    Notify.success('Pagamento relizado!');
    navigation.navigate('Confirm')
    
  }
     
    return(
        
        <View style={styles.container}>

                <Text style={styles.txt}>Your Payment</Text>

                
                <View style={styles.selectView} >
                <select name="cars" style={styles.select}>
                    <option value="boleto">Boleto</option>
                    <option value="pix">Pix</option>
                    <option value="cartao">Cartão</option>
                </select>  

                <View style={styles.view} >
                  <TextInput
                    style={styles.input}
                    onChangeText={setValor}
                    value={valor}
                    placeholder="Payment Value"
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

                    

                    
                
            </View>
      
            
        
    )
}