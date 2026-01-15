import { Ilustrasi } from "@/src/assets";
import { Gap, Input } from "@/src/components/atoms";
import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";
import { colors } from "@/src/utils/colors";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInPage() {
  const handleStart = () => {
    router.push("/home");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Image source={Ilustrasi} style={styles.image} />
          <Text variant="heading" style={styles.title}>
            KhatamYuk
          </Text>
          <Text variant="body" color="secondary" style={styles.description}>
            Silakan login agar lebih semangat menyelesaikan target khatam hari
            ini
          </Text>
        </View>

        <Input placeholder="Email" />
        <Gap height={12} />
        <Input placeholder="Password" />

        <Gap height={12} />
        <Button title="Masuk" onPress={handleStart} style={styles.button} />
        <View style={[styles.flexrow, {alignItems: 'center', justifyContent: 'center'}]}>
          <Text variant="body" color="secondary" style={styles.description}>
            Belum punya akun?
          </Text>
          <Gap width={4} />
          <TouchableOpacity onPress={()=> router.push('signup')}>
            <Text variant="body" color="primary" style={styles.description}>
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.white,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 8,
    alignItems: "center",
  },
  title: {
    marginBottom: 12,
  },
  subtitle: {
    marginBottom: 8,
  },
  description: {
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    marginBottom: 16,
  },
  infoNote: {
    marginTop: 8,
  },
  image: {
    width: 200,
    resizeMode: "contain",
    height: 200,
  },
  flexrow:{
    flexDirection: "row",
  }
});
