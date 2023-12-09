import { View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

export default function Recoverypage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar />

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color='#FFFFFF'/>
      </TouchableOpacity>

      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>We can recover that using your valid email</Text>

      <View style={styles.TextInput}>
      <MaterialIcons name="alternate-email" size={24} color="black" />
      <TextInput style={styles.input} placeholder='Email Address'  keyboardType="email-address"/>

      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.recov}>
      <AntDesign name="arrowleft" size={24} color='#28c492'/>
            <Text style={{color: '#28c492'}}>Send Recovery Instructions</Text>
        </TouchableOpacity>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor:'#e8ecf4',
      alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: '#28c492',
    borderRadius: 13,
  },
  title:{
    marginTop: 150,
    fontSize: 30, 
    fontWeight: '700'
  },
  subtitle:{
    fontSize: 16, 
    fontWeight: '700', 
    color: '#28c492'
  },
  TextInput: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: 300,
    maxWidth: '80%',
    padding: 15,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    marginTop: 150,
  },
  input: {
      marginLeft: 10,
      fontStyle: 'italic',
  },
  recov: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      width: 300,
      maxWidth: '80%',
      padding: 15,
      borderWidth: 2,
      borderColor: '#28c492',
      borderRadius: 15,
      marginTop: 10,
      alignSelf: 'center',
  },
})
