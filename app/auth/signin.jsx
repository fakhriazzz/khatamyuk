import { Ilustrasi } from "@/src/assets";
import { Gap, Input } from "@/src/components/atoms";
import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";
import { auth } from "@/src/services/firebase";
import { colors } from "@/src/utils/colors";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInPage() {
  const [email, setemail] = useState("test@gmail.com");
  const [password, setpassword] = useState("123456");
  const [loading, setloading] = useState(false);

  const handleStart = async () => {
    try {
      setloading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setloading(false);
      router.replace("/home/home");
    } catch (error) {
      let message = "Terjadi kesalahan saat mencoba masuk. Silakan coba lagi.";

      if (error.code === "auth/invalid-credential") {
        message = "Email atau kata sandi yang Anda masukkan salah.";
      } else if (error.code === "auth/invalid-email") {
        message = "Format email tidak valid";
      }

      setloading(false);
      Alert.alert("Gagal Masuk", message);
    }
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

        <Input placeholder="Email" value={email} onChangeText={setemail} />
        <Gap height={12} />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setpassword}
          secureTextEntry
        />

        <Gap height={12} />
        <Button
          title={loading ? "Memuat..." : "Masuk"}
          onPress={handleStart}
          style={styles.button}
        />
        <View
          style={[
            styles.flexrow,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text variant="body" color="secondary" style={styles.description}>
            Belum punya akun?
          </Text>
          <Gap width={4} />
          <TouchableOpacity onPress={() => router.push("/auth/signup")}>
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
  flexrow: {
    flexDirection: "row",
  },
});
