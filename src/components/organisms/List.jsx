import { colors } from "@/src/utils/colors";
import { StyleSheet, View } from "react-native";
import { Gap } from "../atoms";
import { Text } from "../atoms/Text";

export const List = ({ variant, text, text2, text3 }) => {
  return (
    <>
      {variant == "target" && (
        <View style={styles.containerTarget}>
          <Text variant="subheading" color="primary">
            {text} Hari
          </Text>
          <Gap height={2} />
          <Text variant="body" color="primary">
            {text2} halaman per hari
          </Text>
          <Gap height={2} />
          <Text variant="body" color="primary">
            Dibuat pada {text3}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerTarget: {
    backgroundColor: colors.background.white,
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border.gray
  },
});