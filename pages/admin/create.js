import styles from './styleCreate'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';

import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import {storage, db } from '../config/firebase';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Create({navigation}) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState()
  const [image, setImage] = useState('')

  const upload = e => {
    // previne erros no evento
    e.preventDefault()
    const file = image

    if (!file) {
      console.log('Faltou imagem')
      Notify.failure('Faltou Imagem');

      return
    }
    if (!name) {
      console.log('Faltou nome:')
      Notify.failure('Faltou Nome');

      return
    }
    if (!price) {
      console.log('Faltou preco')
      Notify.failure('Faltou Preço');

      return
    }

    if (image == null) return

    adicionar()
  }

  async function adicionar() {
    await addDoc(collection(db, 'item'), {
      name: name,
      price: price,
      image: image
    })

    setName('')
    setPrice('')
    Notify.success('Item criado!');

    
  }
    return (
        <>
        <View style={styles.container}>

            <View >
                  <TextInput
                    style={styles.input}
                    onChangeText={e => {
                      setName(e)}}
                    value={name}
                    type='text'
                    placeholder="Product Name"
                    keyboardType="text"
                  />
            </View>
            <View >
                  <TextInput
                    style={styles.input}
                    onChangeText={e => {
                      setPrice(e)}}
                    value={price}
                    type='numeric'
                    placeholder="Product Price"
                    keyboardType="numeric"
                  />
            </View>
            <View >
                  <input
                    style={styles.input}
                    type='file'
                    onChange={e => {
                      setImage(e.target.files[0])
                    }}
                    
                  />
            </View>

            
            <TouchableOpacity 
                    title='Create Item'
                    onPress={upload}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Create</Text>
                </TouchableOpacity>

            
            </View>           
    
      
      </>
      
    );
  }