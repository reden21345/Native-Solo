import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';

import { HomeScreen,
  LoginScreen,
  SignupScreen 
} from './src/screens/ExportIndex';



export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="titleLarge">Open up App.js to start working on your app!</Text>
        <HomeScreen/>
        <LoginScreen/>
        <SignupScreen/>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
