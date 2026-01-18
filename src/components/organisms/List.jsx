import { colors } from "@/src/utils/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Gap } from "../atoms";
import { Text } from "../atoms/Text";

export const List = ({ variant, text, text2, text3, onPress }) => {
  return (
    <>
      {variant == "target" && (
        <TouchableOpacity style={styles.containerTarget} onPress={onPress}>
          <Text variant="subheading" color="primary">
            {text} Hari
          </Text>
          <Gap height={2} />
          <Text variant="body" color="secondary">
            {text2} halaman per hari
          </Text>
          <Gap height={2} />
          <Text variant="body" color="secondary">
            Dibuat pada {text3}
          </Text>
        </TouchableOpacity>
      )}
      {variant == "detailtarget" && (
        <View style={styles.containerTarget}>
          <Text variant="subheading" color="primary">
            {text} Halaman
          </Text>
          <Gap height={2} />
          <Text variant="body" color="secondary">
            {text2}
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
    borderColor: colors.border.gray,
  },
});
