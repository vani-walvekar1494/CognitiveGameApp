import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cognitive Performance</Text>
      <Text>Memory Score: 80%</Text>
      <Text>Reaction Time: 250ms</Text>
      <Text>Focus Level: Good</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default ResultsScreen;
