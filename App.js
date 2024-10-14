import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import TextInputAffix from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix';
import TextInputIcon from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cadastro:</Text>
      <TextInput
        label="Email"
        value={ textEmail }        
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bf2424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff'
  }
});
