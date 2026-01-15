import { Button } from "@/src/components/atoms/Button";
import { Text } from "@/src/components/atoms/Text";
import { List } from "@/src/components/organisms";
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

export default function OnBoardingPage() {
  const handleStart = () => {
    router.push("/calculate");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text variant="subheading" style={styles.title}>
              Assalamu’alaikum, Fakhri
            </Text>
            <Text variant="body" color="secondary" style={styles.subtitle}>
              Semoga hari ini penuh keberkahan
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: `https://ui-avatars.com/api/?background=random&name=Fakhri`,
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

        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
        <List variant="target" text="30" text2="19" />
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
