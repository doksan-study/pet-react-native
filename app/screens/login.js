/* eslint-disable */
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

// import {TextInput, } from 'react-native-paper';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.logo}>LOGO</Text>
        <TextInput
          // flat
          style={styles.textinput}
          label={'Enter Email'}
          activeUnderlineColor={'#C0C0C3'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          // flat
          style={styles.textinput}
          label={'Password'}
          activeUnderlineColor={'#C0C0C3'}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        {/* <Button style={styles.loginButton} title="Login" /> */}
        <Pressable style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4EFF3',
    height: '100%',
  },
  innerContainer: {
    padding: 25,
  },
  logo: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 25,
  },
  textinput: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  loginButton: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#FF995E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
