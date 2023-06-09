import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Button, Image ,TextInput} from 'react-native';
import styles from '../client/stylePagar'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { collection, getDocs,doc, deleteDoc,addDoc} from 'firebase/firestore'
import {db} from '../config/firebase';

import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function pagePagar({navigation}){

  const [selected, setSelected] = useState('');

  const [valor,setValor] = useState('')
 
  const handleChange = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  

  function adicionar() {
    addDoc(collection(db, 'pagamento'), {
      tipoPagamento: selected,
      valor: valor,
   
    })
    setValor('')
    

    Notify.success('Pagamento relizado!');
    navigation.navigate('Confirm')
    
  }
     
    return(
        
        <View style={styles.container}>

                <Text style={styles.txt}>Your Payment</Text>

                
                <View style={styles.selectView} >
                <select value={selected} onChange={handleChange} style={styles.select}>
                  <option value="">--Tipos--</option>
                  <option value="pix">Pix</option>
                  <option value="boleto">Boleto</option>
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