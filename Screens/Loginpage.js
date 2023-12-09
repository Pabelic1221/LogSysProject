import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Loginpage({ navigation, route }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernamePlaceholder, setUsernamePlaceholder] = useState('Username');

  const registeredUsername = route.params?.username;

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log('Login successful!');
        // Navigate to the Home screen or any other screen as needed
        navigation.navigate('Home');
      } else {
        console.error('Login failed:', response.status);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={require('../components/Images/Conext.png')} style={styles.logo} />
          <Text style={styles.title}>Sign In</Text>

        <View style={styles.TextInput}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            onFocus={() => setUsernamePlaceholder('')}
            onBlur={() => setUsernamePlaceholder('Username')}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <AntDesign name={showPassword ? 'eye' : 'eyeo'} size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Recovery')} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignup} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign1}>Sign Up</Text>
       </TouchableOpacity>
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
    marginBottom: 50,
    marginTop: 20,
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
    marginBottom: 20
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
    fontWeight: '700'
  },
  sign: {
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
  sign1: {
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