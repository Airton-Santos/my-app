import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function App() {
  const [descricao, setdescricao] = useState('');
  const [valor, setvalor] = useState('');
  const [cadastrando, setCadastrando] = useState(false);

  const handlerCadastra = async () => {
    setCadastrando(true);

    await fetch('https://66fc26cec3a184a84d1642a4.mockapi.io/Lanches', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        valor: valor,
        descricao: descricao
      }),
    });

    setCadastrando(false);
  };

  {/* Comentários removidos, mas se precisar, você pode reativá-los conforme necessário
  const [textEmail, setEmailText] = useState('');
  const [Senha, senhaText] = useState('');
  const [nome, nomeText] = useState('');

  const [securePassword, setSecurePassword] = useState(true); // Estado para controlar visibilidade da senha

  const togglePasswordVisibility = () => {
    setSecurePassword(!securePassword); // Alterna entre ocultar e mostrar a senha 
  }
  */}

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Comentários que você deseja manter
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
        */}

        <TextInput
          style={styles.descInput}
          label='Descrição'
          value={descricao}
          onChangeText={setdescricao}
        />
        <TextInput
          style={styles.valorInput}
          label='Valor'
          value={valor}
          onChangeText={setvalor}
        />
        <Button 
          style={styles.buttonRegistrar}
          buttonColor='#bf2424'
          mode='contained'
          onPress={handlerCadastra}
          loading={cadastrando}
        >
          Registrar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Faz o contêiner ocupar toda a altura e largura disponível
    justifyContent: 'center',  // Centraliza o conteúdo verticalmente
    alignItems: 'center',  // Centraliza o conteúdo horizontalmente
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#0f0f0f',
    width: 350,
    height: 400,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#0f0f0f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  texto: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
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
  },
  iconEye: {
    marginRight: 10, // Adiciona um espaço entre o ícone e o input
    marginTop: 15,
  },
  descInput: {
    padding: 5,
    margin: 5,
    borderColor: '#bf2424',
    borderRadius: 10,
    borderWidth: 5
  },
  valorInput: {
    padding: 5,
    margin: 5,
    borderColor: '#bf2424',
    borderRadius: 10,
    borderWidth: 5
  },
  buttonRegistrar: {
    margin: 10,
    borderRadius: 0,  
  },
});