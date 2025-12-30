import { StepIndicator } from '@/src/components/molecules/StepIndicator';
import { CalculationForm } from '@/src/components/organisms/CalculationForm';
import { Header } from '@/src/components/organisms/Header';
import { calculatePagesPerDay } from '@/src/utils/calculations';
import { colors } from '@/src/utils/colors';
import { APP_CONFIG } from '@/src/utils/constants';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CalculatePage() {
  const [days, setDays] = useState(APP_CONFIG.DEFAULT_DAYS);

  const handleBack = () => {
    router.back();
  };

  const handleCalculate = () => {
    const result = calculatePagesPerDay(days);
    router.push({
      pathname: '/result',
      params: {
        pagesPerDay: result.pagesPerDay.toString(),
        totalDays: result.totalDays.toString(),
        totalPages: result.totalPages.toString(),
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Header title="Perhitungan" onBack={handleBack} showBackButton={true} />
        
        <CalculationForm
          days={days}
          onDaysChange={setDays}
          onCalculate={handleCalculate}
        />

        <StepIndicator currentStep="calculation" stepNumber={2} stepName="Form Input" />
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

