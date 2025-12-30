import { Icon } from '@/src/components/atoms/Icon';
import { Text } from '@/src/components/atoms/Text';
import { colors } from '@/src/utils/colors';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const Header = ({
  title,
  onBack,
  showBackButton = false,
}) => {
  return (
    <View style={styles.container}>
      {showBackButton && onBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      )}
      <Text variant="subheading" bold style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  title: {
    flex: 1,
  },
});

