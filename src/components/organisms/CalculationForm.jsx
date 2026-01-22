import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";
import { NumberInput } from "@/src/components/molecules/NumberInput";
import { QURAN_CONSTANTS } from "@/src/utils/constants";
import { StyleSheet, View } from "react-native";

export const CalculationForm = ({ days, onDaysChange, onCalculate }) => {
  return (
    <View style={styles.container}>
      <Text variant="body" style={styles.question}>
        Berapa hari target khatam?
      </Text>

      <NumberInput
        value={days}
        onChange={onDaysChange}
        min={1}
        max={365}
        placeholder="Contoh: 30"
        suffix="hari"
      />

      <View style={styles.infoContainer}>
        <Text variant="body" color="secondary">
          Total halaman Al-Qur'an diasumsikan{" "}
          <Text variant="body" color="green" bold>
            {QURAN_CONSTANTS.STANDARD_PAGES} halaman.
          </Text>
        </Text>
      </View>

      <Button
        title="Hitung Halaman per Hari"
        onPress={onCalculate}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  question: {
    marginBottom: 8,
    fontSize: 18,
  },
  infoContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  button: {
    marginTop: 8,
  },
});
