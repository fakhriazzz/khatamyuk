import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/src/components/atoms/Text';
import { colors } from '@/src/utils/colors';

const stepLabels = {
  home: 'Home',
  calculation: 'Form Input',
  result: 'Hasil',
};

export const StepIndicator = ({
  currentStep,
  stepNumber,
  stepName,
}) => {
  const isActive = stepName.toLowerCase() === currentStep;

  return (
    <View style={styles.container}>
      <Text variant="caption" color="secondary">
        Langkah {stepNumber} dari 3 ·{' '}
        <Text
          variant="caption"
          style={[styles.stepName, isActive && styles.activeStep]}
        >
          {stepLabels[currentStep] || stepName}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: 'center',
  },
  stepName: {
    color: colors.accent.orange,
  },
  activeStep: {
    fontWeight: '600',
  },
});

