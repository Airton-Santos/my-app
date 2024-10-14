import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  const [textEmail, setEmailText] = useState('')
  const [Senha, senhaText] = useState('')
  const [nome, nomeText] =  useState('')

  const [securePassword, setSecurePassword] = useState(true); // Estado para controlar visibilidade da senha

  const togglePasswordVisibility = () => {
    setSecurePassword(!securePassword); // Alterna entre ocultar e mostrar a senha
  };

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Cadastro:</Text>

      <TextInput
        style={styles.nomeInput}
        autoCapitalize='words'
        label="Nome"
        value={nome}
        onChangeText={nomeText}        
      />

      <TextInput
        style={styles.emailInput}
        autoCapitalize='none'
        keyboardType='email-address'
        label="Email"
        value={textEmail}
        onChangeText={setEmailText}        
      />

      <TextInput
        style={styles.senhaInput}
        autoCapitalize="none"
        secureTextEntry={securePassword}  // Usa o estado para definir visibilidade
        right={
          <TextInput.Icon
            style={styles.iconEye}
            icon={securePassword ? "eye-off" : "eye"}  // Muda o ícone entre "eye" e "eye-off"
            color="#808080"
            onPress={togglePasswordVisibility} // Altera o estado ao pressionar o ícone
          />
        }
        label="Senha"
        value={Senha}
        onChangeText={senhaText}        
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 20,
    justifyContent: 'center',
  },
  texto: {
    color: '#fff'
  },

  emailInput: {
    padding: 5,
    margin: 5,
    borderColor: '#bf2424',
    borderRadius: 10,
    borderWidth: 5
  },
  nomeInput: {
    padding: 5,
    margin: 5,
    borderColor: '#bf2424',
    borderRadius: 10,
    borderWidth: 5
  },

  senhaInput: {
    padding: 5,
    margin: 5,
    borderColor: '#bf2424',
    borderRadius: 10,
    borderWidth: 5
  }

});
