import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Link, router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Button, List } from 'react-native-paper'

const Comida = ({descricao, valor}) => {
  return (
    <List.Item title = {descricao} description = {valor}/>
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
      <FlatList data = {comidas} renderItem = {({ item }) => <Comida descricao={item.descricao} valor={item.valor} />} />

      <Link href='/cadastro' asChild>
        <Button mode='contained'>Novo Lanche</Button>
      </Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})