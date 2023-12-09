import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function LandingPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../components/Images/Conext.png')}
            style={styles.logo}
            alt="Logo"
          />
          <Text style={styles.title}>Welcome to CONEXT</Text>
          <Text style={styles.subtitle}>
            Designed to take your Lifestyle to the Next Level
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        >
          <Text style={styles.sign}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={[styles.button, styles.secondaryButton]}
        >
          <Text style={styles.sign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#28c492',
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28c492',
    borderRadius: 13,
    paddingVertical: 10,
    marginTop: 15,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#28c492',
  },
  sign: {
    color: '#fff',
    fontSize: 20,
  },
});
