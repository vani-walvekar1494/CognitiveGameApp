import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Game</Text>
      <Button title="Memory Test" onPress={() => navigation.navigate('Results')} />
      <Button title="Reaction Speed" onPress={() => navigation.navigate('Results')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default GameScreen;
