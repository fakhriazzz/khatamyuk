import { Gap } from "@/src/components/atoms";
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
    router.push("/home/calculate");
  };

  const formatDate = (timestamp) => {
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

  const goDetailtarget = (data) => {
    router.push({
      pathname: "/home/[targetid]",
      params: { targetid: data.id },
    });
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
          <TouchableOpacity>
            <Image
              source={{
                uri: `https://ui-avatars.com/api/?background=F59E0B&color=fff&name=${profile?.name}`,
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Gap width={12} />
          <View>
            <Text variant="subheading" style={styles.title}>
              Assalamu’alaikum, {profile?.name?.split(" ")[0]}
            </Text>
            <Text variant="body" color="secondary">
              Semoga hari ini penuh keberkahan
            </Text>
          </View>
        </View>
        <Gap height={12} />
        <Button
          variant="main"
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
              text3={formatDate(data.createdAt)}
              onPress={() => goDetailtarget(data)}
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
    alignItems: "center",
  },
  title: {
    marginBottom: 4,
  },
  button: {
    marginBottom: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 12,
  },
});
