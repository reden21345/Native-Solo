import { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'

export const LoginScreen = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.spacer} variant='labelLarge'>Welcome</Text>
        <Text variant='headlineLarge'>Hardware</Text>
        <Text style={styles.spacer} variant='bodyLarge'>Login</Text>
        <View style={styles.subContainer}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={password => setText(password)}
        />
        <Button icon="login" style={[styles.spacer, styles.btnStyle]} mode="contained" onPress={() => console.log('Pressed')}>
        Login
        </Button>
        <Button mode="text" style={[styles.btnStyle]} onPress={() => console.log('Pressed')}>
        New to App? Signup...
        </Button>
      </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subContainer: {
    width: '80%'
  },
  spacer: {
    margin: 11
  },
  btnStyle: {borderRadius: 4, marginHorizontal: 0, paddingVertical: 6}
})