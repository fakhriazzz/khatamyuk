import { Ilustrasi } from "@/src/assets";
import { Text } from "@/src/components/atoms/Text";
import { colors } from "@/src/utils/colors";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/auth/signin");
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Image source={Ilustrasi} style={styles.image} />
      <Text variant="heading" style={styles.title}>
        KhatamYuk
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.lightGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 320,
    resizeMode: "contain",
    height: 300,
  },
});
