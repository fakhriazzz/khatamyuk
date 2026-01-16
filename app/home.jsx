import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";
import { List } from "@/src/components/organisms";
import { auth, db } from "@/src/services/firebase";
import { colors } from "@/src/utils/colors";
import { router } from "expo-router";
import { get, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnBoardingPage() {
  const [profile, setprofile] = useState(null);
  const [targets, settargets] = useState(null);
  const uid = auth.currentUser.uid;

  const getProfile = async () => {
    const snapshot = await get(ref(db, "users/" + uid));
    if (snapshot.exists()) {
      setprofile(snapshot.val());
    } else {
      
    }
  };

  const getTargets = async () => {
    const datatargets = ref(db, "targets/" + uid);

    const unsubscribe = onValue(datatargets, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
      settargets(list.reverse());
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    getProfile();
    getTargets();
  }, [uid]);

  const handleStart = () => {
    router.push("/calculate");
  };

  if (!profile && !targets) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text>Memuat data...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text variant="subheading" style={styles.title}>
              Assalamu’alaikum, {profile?.name}
            </Text>
            <Text variant="body" color="secondary" style={styles.subtitle}>
              Semoga hari ini penuh keberkahan
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: `https://ui-avatars.com/api/?background=27ae60&color=fff&name=${profile?.name}`,
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        <Button
          variant="outline"
          title="+ Tambah Target"
          onPress={handleStart}
          style={styles.button}
        />

        {targets?.map((data, index) => {
          return (
            <List
              key={index}
              variant="target"
              text={data.totalDays}
              text2={data.pagesPerDay}
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
  header: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginBottom: 12,
  },
  subtitle: {
    marginBottom: 8,
  },
  button: {
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
