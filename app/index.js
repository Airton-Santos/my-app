import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Link, router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Button, IconButton, List } from 'react-native-paper'

const Comida = ({descricao, valor, id}) => {

  const handleExcluir = async (id) => {
    console.log(id);

    await fetch(`https://66fc26cec3a184a84d1642a4.mockapi.io/Lanches/${id}`, {
      method: 'DELETE',
    });
  }

  return (
   <List.Item 
      title = {descricao}
      description = {valor} 
      right={() => <IconButton icon={"trash-can-outline"} onPress={() => handleExcluir(id)}/>}
  />
  );
};

const Index = () => {

  const [comidas, setComidas] =  useState("")

  const getComidas = async () => {
    console.log("getComidas");

    const response = await fetch('https://66fc26cec3a184a84d1642a4.mockapi.io/Lanches');
    const json = await response.json();
    setComidas(json)
  };

  useEffect(()=>{
    getComidas(); 
  });

  return (
    <View>
      <Link href='/cadastro' asChild>
        <Button mode='contained'>Novo Lanche</Button>
      </Link>
      <FlatList data = {comidas} renderItem = {({ item }) => <Comida id={item.id} descricao={item.descricao} valor={item.valor} />} />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})