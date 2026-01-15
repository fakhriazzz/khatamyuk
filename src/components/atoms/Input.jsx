import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '@/src/utils/colors';

export const Input = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={colors.text.secondary}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border.gray,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text.primary,
    backgroundColor: colors.background.white,
  },
});


