import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/utils/colors';

export const Icon = ({
  name,
  size = 24,
  color = colors.text.primary,
}) => {
  return <Ionicons name={name} size={size} color={color} />;
};


