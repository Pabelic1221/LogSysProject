import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function Registrationpage({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    if (password === confirmPassword) {
      console.log('Registered: ', { username, email, password });

    
      navigation.navigate('Login', { username });
    } else {
      console.error('Passwords do not match!');
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={require('../components/Images/Conext.png')} style={styles.logo} />
        <Text style={styles.title}>Register</Text>

        <View style={styles.TextInput}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
        </View>

        <View style={styles.TextInput}>
          <MaterialIcons name="alternate-email" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity onPress={handleRegistration} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign1}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.already}><Text>Already Sign Up?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#279EFF', textDecorationLine: 'underline', marginLeft: 5 }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#e8ecf4',
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 70,
  },
  title:{ 
    fontSize: 28,
    fontWeight: '700',
    color: '#1e1e1e', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center', 
    marginBottom: 20 
},
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 280,
    maxWidth: '80%',
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    paddingBottom: 8,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontStyle: 'italic',
  },
  forgot: {
    color: '#279EFF',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  sign1: {
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#28c492',
    marginBottom: 2,
    width: 260,
    borderRadius: 10,
    color: '#28c492',
    fontSize: 20,
  },
  already: {
    flexDirection: 'row',
    marginTop: 8,
    fontWeight: '700',
  },
}
);