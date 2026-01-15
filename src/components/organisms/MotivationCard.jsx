import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { colors } from '@/src/utils/colors';

export const MotivationCard = () => {
  return (
    <View style={styles.container}>
      <Text variant="label" color="secondary" style={styles.title}>
        MOTIVASI
      </Text>
      <Text variant="body" style={styles.quote}>
        "Sebaik-baik kalian adalah yang belajar Al-Qur'an dan mengajarkannya."
      </Text>
      <Text variant="body" color="secondary" style={styles.subtext}>
        Mulailah dengan langkah kecil tapi konsisten setiap hari.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.light,
    borderRadius: 12,
    padding: 20,
    marginTop: 24,
  },
  title: {
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  quote: {
    marginBottom: 8,
    fontStyle: 'italic',
    fontSize: 16,
  },
  subtext: {
    fontSize: 14,
  },
});


