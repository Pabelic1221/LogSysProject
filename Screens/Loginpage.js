import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Loginpage({navigation, route}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registeredUsername = route.params?.username;

  const handleSignup = () => {
    console.log('Entered credentials:', { username, password });
    console.log('Registered username:', registeredUsername);

    if (username === registeredUsername) {
      console.log('Valid credentials');
      
      
      navigation.navigate('Home');
    } else {
      console.error('Invalid credentials');
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