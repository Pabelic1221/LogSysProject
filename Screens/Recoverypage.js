import { View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

export default function Recoverypage(navigation) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Don't we can recover that using your email</Text>

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
  },
  title:{
    marginTop: 100,
    fontSize: 30, 
    fontWeight: '700'
  },
  subtitle:{
    fontSize: 16, 
    fontWeight: '700', 
    color: '#28c492'
  },
  input: {
      marginLeft: 10,
      fontStyle: 'italic',
  },
  TextInput: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      width: 300,
      maxWidth: '80%',
      padding: 15,
      backgroundColor: '#D9D9D9',
      borderRadius: 15,
      marginTop: 300,
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
  },
})