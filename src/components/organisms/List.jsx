import { StyleSheet, View } from "react-native";
import { Text } from "../atoms/Text";

export const List = ({ variant, text, text2 }) => {
  return (
    <>
      {variant == "target" && (
        <View style={styles.containerTarget}>
          <Text variant="subheading" color="primary">
            {text} Hari
          </Text>
          <Text variant="body" color="primary">
            {text2} halaman per hari
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerTarget: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
});