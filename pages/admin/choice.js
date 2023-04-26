import styles from './styleChoice'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';

export default function Create({navigation}) {
    return (
        <>
      <View style={styles.container}>
      <View>
            <Text style={styles.texto1}>
                Japanese
            </Text>
        </View>
        <View style={styles.btn}>
            
           

            <TouchableOpacity 
                    title='Create'
                    onPress={()=> navigation.navigate('Create')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Adicionar Item</Text>
                </TouchableOpacity>

            <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Remover Item</Text>
                </TouchableOpacity>

            
            </View>           
      </View>
      
      </>
      
    );
  }