import styles from './styleRemove'
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList,CheckBox,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import {doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase';
import { async } from '@firebase/util';
import { BaseNavigationContainer } from '@react-navigation/native';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Remove({navigation}) {
    const [page, setPage] = useState([])
    const [removido,setRemovido] = useState(0)


    function deleteItem(id) {
        deleteDoc(doc(db, 'item', id));
        setRemovido(removido+1)
    }

    useEffect(() => {
        async function remover() {
        const querySnapshot = await getDocs(collection(db, 'item'));
        const list = []
        querySnapshot.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id })
            

        });
        
        setPage(list)
    }
        remover()
    }, [removido])

    return (
        
        <View style={styles.container}>

        <FlatList
                // Aqui guardamos a lista que setamos na page em data, renderizando o item que esta na lista para usarmos no on press
                data={page}
                renderItem={({ item }) =>  {
                    return (
                        <View style={styles.pageDelete}>

                            <View style={{ width: 50}}>
                                    
                                        <TouchableOpacity
                                    style={styles.deleteItem}
                                    onPress={() => { deleteItem(item.id) }}
                                >

                                    <FontAwesome
                                        name='trash'
                                        size={25}
                                        color='black'
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: '#fff', width: 300 }}>
                                <Text style={styles.texto1}>
                                    {item.name} - {item.price}
                                </Text>
                            </View>
    
                           
                        </View>
                    )
                }}

            />

        </View>
    )
}