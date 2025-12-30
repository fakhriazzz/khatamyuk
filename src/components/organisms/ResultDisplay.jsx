import { Button } from '@/src/components/atoms/Button';
import { Text } from '@/src/components/atoms/Text';
import { colors } from '@/src/utils/colors';
import { StyleSheet, View } from 'react-native';

export const ResultDisplay = ({
  result,
  onRecalculate,
  onSave,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <View style={styles.mainResult}>
          <Text variant="heading" color="green" style={styles.resultText}>
            {result.pagesPerDay} halaman / hari
          </Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressCircle}>
            <View style={[styles.progressRing, { borderColor: colors.accent.yellow }]}>
              <View style={styles.progressInner}>
                <Text variant="caption" color="secondary">
                  Target
                </Text>
                <Text variant="subheading" color="green" bold>
                  {result.pagesPerDay}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Text variant="body" color="secondary" style={styles.contextText}>
        Untuk khatam dalam {result.totalDays} hari ({result.totalPages} halaman).
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Hitung Ulang"
          onPress={onRecalculate}
          variant="outline"
          style={styles.button}
        />
        {/* {onSave && (
          <Button
            title="Simpan / Screenshot"
            onPress={onSave}
            variant="secondary"
            style={styles.button}
          />
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  mainResult: {
    flex: 1,
  },
  resultText: {
    fontSize: 32,
    lineHeight: 40,
  },
  progressContainer: {
    marginLeft: 16,
  },
  progressCircle: {
    width: 80,
    height: 80,
  },
  progressRing: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressInner: {
    alignItems: 'center',
  },
  contextText: {
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 6,
  },
});

