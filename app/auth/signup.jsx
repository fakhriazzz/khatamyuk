import { Ilustrasi } from "@/src/assets";
import { Gap, Input } from "@/src/components/atoms";
import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";
import { auth, db } from "@/src/services/firebase";
import { colors } from "@/src/utils/colors";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
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

export default function SignUpPage() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const handleStart = async () => {
    setloading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await set(ref(db, "users/" + res.user.uid), {
        name,
        email,
        createdAt: Date.now(),
      });

      setloading(false);
      router.push("/home");
    } catch (error) {
      let message = "Terjadi kesalahan, silakan coba lagi";

      if (error.code === "auth/email-already-in-use") {
        message = "Email sudah digunakan";
      } else if (error.code === "auth/invalid-email") {
        message = "Format email tidak valid";
      } else if (error.code === "auth/weak-password") {
        message = "Password minimal 6 karakter";
      }

      setloading(false);
      Alert.alert("Gagal Daftar", message);
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
            Mulai perjalanan khatam Al-Qur’anmu hari ini
          </Text>
        </View>

        <Input placeholder="Nama" value={name} onChangeText={setname} />
        <Gap height={12} />
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
          title={loading ? "Memuat..." : "Daftar Sekarang"}
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
            Sudah punya akun?
          </Text>
          <Gap width={4} />
          <TouchableOpacity onPress={() => router.push("/auth/signin")}>
            <Text variant="body" color="primary" style={styles.description}>
              Masuk
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
