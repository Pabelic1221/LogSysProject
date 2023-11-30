import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react'

export default function Homepage({navigation}) {
  const handleLogout = () => {
    
    navigation.navigate('Landing'); 
  };
  return (
    <View style={styles.container}>
      <Image source={require('../components/Images/Conext.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to the Homepage</Text>
      <Text>You have successfully entered CONEXT</Text>
      <Text>You can now logout if you want</Text>

      <TouchableOpacity onPress={handleLogout} style={styles.logout}>
        <SimpleLineIcons name="logout" size={24} color="#FFFF" />
        <Text style={styles.sign}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 70,
  },
  title:{
    fontWeight: '700',
    fontSize: 30, 
    color: '#28c492', 
    textAlign: 'center',
    marginBottom: 20 
  },
  sign: {
    marginLeft: 10,
    color: '#FFFF',
  },
  logout: {
    padding: 15,
    backgroundColor: '#28c492',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 30,
    borderRadius: 10,
    fontSize: 20,
  },
}
);