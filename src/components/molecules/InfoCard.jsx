import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { colors } from '@/src/utils/colors';

export const InfoCard = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text variant="label" color="secondary" style={styles.title}>
        {title}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.lightGray,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  title: {
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});


