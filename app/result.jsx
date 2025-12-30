import { StepIndicator } from '@/src/components/molecules/StepIndicator';
import { Header } from '@/src/components/organisms/Header';
import { MotivationCard } from '@/src/components/organisms/MotivationCard';
import { ResultDisplay } from '@/src/components/organisms/ResultDisplay';
import { colors } from '@/src/utils/colors';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResultPage() {
  const params = useLocalSearchParams();
  
  const result = {
    pagesPerDay: parseInt(params.pagesPerDay || '0', 10),
    totalDays: parseInt(params.totalDays || '0', 10),
    totalPages: parseInt(params.totalPages || '0', 10),
  };

  const handleBack = () => {
    router.back();
  };

  const handleRecalculate = () => {
    router.push('/calculate');
  };

  const handleSave = () => {
    // TODO: Implement save/screenshot functionality
    console.log('Save/Screenshot functionality to be implemented');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Header title="Hasil Perhitungan" onBack={handleBack} showBackButton={true} />
        
        <ResultDisplay
          result={result}
          onRecalculate={handleRecalculate}
          onSave={handleSave}
        />

        <MotivationCard />

        <StepIndicator currentStep="result" stepNumber={3} stepName="Hasil" />
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

