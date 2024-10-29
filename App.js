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
        descricao: descricao,
      }),
    });

    setCadastrando(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    shadowRadius: 3,
  },
  descInput: {
    padding: 5,
    margin: 5,
    borderColor: '#bf2424',
    borderRadius: 10,
    borderWidth: 5,
  },
  valorInput: {
    padding: 5,
    margin: 5,
    borderColor: '#bf2424',
    borderRadius: 10,
    borderWidth: 5,
  },
  buttonRegistrar: {
    margin: 10,
    borderRadius: 0,
  },
});
