import React from 'react';
import { View, StyleSheet } from 'react-native';
import MusicScoreLines from '@/components/MusicScoreLines';

const Index = () => {
  return (
    <View style={styles.container}>
      <MusicScoreLines lineColor="#007AFF" lineSpacing={20} lineThickness={3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export default Index;
