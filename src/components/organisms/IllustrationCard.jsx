import { Icon } from '@/src/components/atoms/Icon';
import { colors } from '@/src/utils/colors';
import { StyleSheet, View } from 'react-native';

export const IllustrationCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="book-outline" size={64} color={colors.primary.dark} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.light,
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
    minHeight: 120,
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

