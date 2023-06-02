import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Button, Image ,TextInput} from 'react-native';
import styles from '../client/styleAdress'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { collection, getDocs,doc, deleteDoc} from 'firebase/firestore'
import {db} from '../config/firebase';

export default function PageConfirm({navigation}){
     
    return(
        
        <View style={styles.container}>

                <Text style={styles.txt}>Your Adress</Text>

                
                <View >
                  <TextInput
                    style={styles.input}
                    // onChangeText={setEmail}
                    // value={email}
                    placeholder="City"
                    keyboardType="text"
                  />
                    </View>

                    <View >
                  <TextInput
                    style={styles.input}
                    // onChangeText={setEmail}
                    // value={email}
                    placeholder="Neighborhood"
                    keyboardType="text"
                  />
                    </View>

                    <View style={styles.viewbtn}>
                  <TextInput
                    style={styles.input}
                    // onChangeText={setEmail}
                    // value={email}
                    placeholder="Road"
                    keyboardType="text"
                  />
                  <TextInput
                    style={styles.input}
                    // onChangeText={setEmail}
                    // value={email}
                    placeholder="House Number"
                    keyboardType="text"
                  />
                    </View>

                    <View >
                  <TextInput
                    style={styles.input}
                    // onChangeText={setEmail}
                    // value={email}
                    placeholder="CEP"
                    keyboardType="text"
                  />
                    </View>
                <TouchableOpacity
                 style={styles.buttonDiv}

                >
                    <Text style={styles.txtButton}>Confirm</Text>
                </TouchableOpacity>
            </View>
      
            
        
    )
}