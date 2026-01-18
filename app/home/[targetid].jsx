import { Button, Gap, Text } from "@/src/components/atoms";
import { List } from "@/src/components/organisms";
import { Header } from "@/src/components/organisms/Header";
import { auth, db } from "@/src/services/firebase";
import { colors } from "@/src/utils/colors";
import { router, useLocalSearchParams } from "expo-router";
import { get, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailtargetPage() {
  const { targetid } = useLocalSearchParams();
  const [target, settarget] = useState(null);
  const [detailtarget, setdetailtarget] = useState(null);

  const formatData = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const getTarget = async () => {
    try {
      const snapshot = await get(
        ref(db, "targets/" + auth.currentUser.uid + "/" + targetid),
      );
      if (snapshot.exists()) {
        settarget(snapshot.val());
      }
    } catch (error) {}
  };

  const getListdetailtarget = async () => {
    try {
      const datadetailtargets = ref(
        db,
        "detailtargets/" + auth.currentUser.uid + "/" + targetid,
      );

      const unsubscribe = onValue(datadetailtargets, (snapshot) => {
        const data = snapshot.val() || {};
        const list = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));

        setdetailtarget(list.reverse());
      });
      return () => unsubscribe();
    } catch (error) {}
  };

  const goAdddetailtarget = () => {
    router.push({
      pathname: "/home/detailtarget/[targetid]",
      params: { targetid },
    });
  };

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    getTarget();
    getListdetailtarget();
  }, [targetid]);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Header
          title="Detail Target"
          onBack={handleBack}
          showBackButton={true}
        />

        <Text variant="body" color="primary">
          Target Khatam : {target?.totalDays} Hari - {target?.pagesPerDay}{" "}
          halaman per hari
        </Text>
        <Gap height={2} />
        <Text variant="body" color="secondary">
          Dibuat pada {formatData(target?.createdAt)}
        </Text>
        <Gap height={8} />
        <Button
          variant="main"
          title="+ Tambah Detail Target"
          onPress={goAdddetailtarget}
          style={styles.button}
        />
        <Gap height={8} />
        {detailtarget?.map((data, index) => {
          return (
            <List
              key={index}
              variant="detailtarget"
              text={data.pages}
              text2={formatData(data.createdAt)}
            />
          );
        })}
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
