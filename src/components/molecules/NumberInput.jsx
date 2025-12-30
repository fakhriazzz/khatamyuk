import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from '@/src/components/atoms/Input';
import { Icon } from '@/src/components/atoms/Icon';
import { Text } from '@/src/components/atoms/Text';
import { colors } from '@/src/utils/colors';

export const NumberInput = ({
  value,
  onChange,
  min = 1,
  max = 365,
  placeholder = 'Contoh: 30',
  suffix = 'hari',
}) => {
  const [textValue, setTextValue] = useState(value.toString());

  const handleChange = (text) => {
    const numValue = parseInt(text, 10);
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      onChange(numValue);
      setTextValue(text);
    } else if (text === '') {
      setTextValue('');
    } else {
      setTextValue(value.toString());
    }
  };

  const handleBlur = () => {
    if (textValue === '' || parseInt(textValue, 10) < min) {
      const newValue = min;
      onChange(newValue);
      setTextValue(newValue.toString());
    } else if (parseInt(textValue, 10) > max) {
      const newValue = max;
      onChange(newValue);
      setTextValue(newValue.toString());
    }
  };

  const increment = () => {
    const newValue = Math.min(value + 1, max);
    onChange(newValue);
    setTextValue(newValue.toString());
  };

  const decrement = () => {
    const newValue = Math.max(value - 1, min);
    onChange(newValue);
    setTextValue(newValue.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          value={textValue}
          onChangeText={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          keyboardType="numeric"
        />
        {suffix && (
          <Text variant="body" style={styles.suffix}>
            {suffix}
          </Text>
        )}
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.controlButton, value <= min && styles.controlButtonDisabled]}
          onPress={decrement}
          disabled={value <= min}
        >
          <Icon name="remove-circle-outline" size={24} color={value <= min ? colors.text.secondary : colors.text.primary} />
        </TouchableOpacity>
        <View style={styles.valueDisplay}>
          <Text variant="body" bold>
            {value}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.controlButton, value >= max && styles.controlButtonDisabled]}
          onPress={increment}
          disabled={value >= max}
        >
          <Icon name="add-circle-outline" size={24} color={value >= max ? colors.text.secondary : colors.text.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
  suffix: {
    minWidth: 40,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.gray,
    backgroundColor: colors.background.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueDisplay: {
    minWidth: 60,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  controlButtonDisabled: {
    opacity: 0.5,
  },
});

