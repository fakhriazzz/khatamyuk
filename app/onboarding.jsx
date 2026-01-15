import { Button } from '@/src/components/atoms/Button';
import { Text } from '@/src/components/atoms/Text';
import { InfoCard } from '@/src/components/molecules/InfoCard';
import { StepIndicator } from '@/src/components/molecules/StepIndicator';
import { IllustrationCard } from '@/src/components/organisms/IllustrationCard';
import { colors } from '@/src/utils/colors';
import { QURAN_CONSTANTS } from '@/src/utils/constants';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnBoardingPage() {
  const handleStart = () => {
    router.push('/calculate');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text variant="heading" style={styles.title}>
            KhatamYuk
          </Text>
          <Text variant="body" color="secondary" style={styles.subtitle}>
            Bantu hitung berapa halaman Al-Qur'an yang perlu dibaca setiap hari
            agar khatam tepat waktu.
          </Text>
        </View>

        <IllustrationCard />

        <Text variant="body" color="secondary" style={styles.description}>
          Rencanakan bacaan harian yang ringan dan konsisten untuk meraih khatam
          yang teratur.
        </Text>

        <Button title="Mulai Menghitung" onPress={handleStart} style={styles.button} />

        <InfoCard title="INFO DASAR">
          <Text variant="body" color="secondary">
            Total halaman standar mushaf Madinah:{' '}
            <Text variant="body" color="green" bold>
              {QURAN_CONSTANTS.STANDARD_PAGES} halaman.
            </Text>
          </Text>
          <Text variant="caption" color="secondary" style={styles.infoNote}>
            Angka ini bisa disesuaikan pada pengaturan lanjutan.
          </Text>
        </InfoCard>

        <StepIndicator currentStep="home" stepNumber={1} stepName="Home" />
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
  },
  title: {
    marginBottom: 12,
  },
  subtitle: {
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    marginBottom: 16,
  },
  infoNote: {
    marginTop: 8,
  },
});
