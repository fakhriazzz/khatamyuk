import { Button, Gap, Input, Text } from "@/src/components/atoms";
import { Header } from "@/src/components/organisms/Header";
import { auth, db } from "@/src/services/firebase";
import { colors } from "@/src/utils/colors";
import { router, useLocalSearchParams } from "expo-router";
import { push, ref } from "firebase/database";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailtargetPage() {
  const date = new Date();
  const { targetid } = useLocalSearchParams();
  const [pages, setpages] = useState("");

  const Adddetailtarget = async () => {
    try {
      await push(
        ref(db, "detailtargets/" + auth.currentUser.uid + "/" + targetid),
        {
          createdAt: Date.now(),
          pages: pages,
        },
      );
      router.back();
    } catch (error) {}
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Header
          title="Tambah Detail Target"
          onBack={handleBack}
          showBackButton={true}
        />

        <Text variant="body" color="primary">
          Tanggal :{" "}
          {date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </Text>
        <Gap height={8} />
        <Input
          placeholder="Masukkan total halaman"
          value={pages}
          onChangeText={(value) => setpages(value)}
          keyboardType="numeric"
        />
        <Gap height={8} />
        <Button
          variant="main"
          title="+ Simpan"
          onPress={Adddetailtarget}
          style={styles.button}
        />
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
});
