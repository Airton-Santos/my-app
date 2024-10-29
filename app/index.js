import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { Button } from 'react-native-paper'

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href='/cadastro' asChild>
        <Button mode='contained'>Novo Lanche</Button>
      </Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})