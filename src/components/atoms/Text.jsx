import { colors } from '@/src/utils/colors';
import { Text as RNText } from 'react-native';

export const Text = ({
  variant = 'body',
  color = 'primary',
  bold = false,
  style,
  children,
  ...props
}) => {
  const getTextStyle = () => {
    const baseStyle = {
      color: color === 'primary' 
        ? colors.text.primary 
        : color === 'secondary' 
        ? colors.text.secondary 
        : color === 'white'
        ? colors.text.white
        : colors.primary.main,
    };

    switch (variant) {
      case 'heading':
        return {
          ...baseStyle,
          fontSize: 28,
          fontWeight: '700',
          lineHeight: 36,
        };
      case 'subheading':
        return {
          ...baseStyle,
          fontSize: 20,
          fontWeight: '600',
          lineHeight: 28,
        };
      case 'body':
        return {
          ...baseStyle,
          fontSize: 16,
          fontWeight: '400',
          lineHeight: 24,
        };
      case 'caption':
        return {
          ...baseStyle,
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 20,
        };
      case 'label':
        return {
          ...baseStyle,
          fontSize: 14,
          fontWeight: '500',
          lineHeight: 20,
        };
      default:
        return baseStyle;
    }
  };

  return (
    <RNText
      style={[
        getTextStyle(),
        bold && { fontWeight: '700' },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};


