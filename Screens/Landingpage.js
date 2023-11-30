import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react'

export default function LandingPage({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}>
        <View style={StyleSheet.header}>
          <Image
            source={require('../components/Images/Conext.png')}style={styles.logo} alt="Logo"
            />
            <Text style={styles.title}>Welcome to CONEXT</Text>
            <Text style={styles.subtitle}>Designed to take your Lifestyle to the Next Level</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sign1}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sign2}>Sign Up</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 24,
      flex: 1,
    },
    header:{
      marginVertical: 36,
    },
    logo:{
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginBottom: 50,
      marginTop: 70,
    },
    title:{
      fontSize: 28,
      fontWeight: '700',
      color: '#1e1e1e',
      marginBottom: 6,
      textAlign: 'center',
    },
    subtitle:{
      fontSize: 18,
      fontWeight: '500',
      color: '#28c492',
      textAlign: 'center',
      marginBottom: 20,
      marginLeft:25,
      marginRight:25,
    },
    sign1: {
      padding: 10,
      backgroundColor: '#28c492',
      color: '#FFFF',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 2,
      width: 260,
      borderRadius: 13,
      fontSize: 20,
    },
    sign2: {
      padding: 10,
      justifyContent: 'center',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#28c492',
      color: '#28c492',
      marginBottom: 2,
      width: 260,
      borderRadius: 13,
      marginTop: 15,
      fontSize: 20
      
   },
  });
  