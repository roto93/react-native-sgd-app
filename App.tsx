import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import PiInput from './src/components/PiInput';
import RateDisplay from './src/components/RateDisplay';
import useRate from './src/hooks/useRate';
import useValue from './src/hooks/useValue';

// Create a client
const queryClient = new QueryClient()

function App() {
  const rate = useRate()

  const { onChange, values, clearValues } = useValue(rate)

  return (
    <SafeAreaView style={styles.container}>

      <RateDisplay SgdToTwdRate={rate?.SGD2TWD} />

      <PiInput
        currency='SGD'
        value={values?.[0] ?? ''}
        setValue={onChange}
      />
      <PiInput
        currency='TWD'
        value={values?.[1] ?? ''}
        setValue={onChange}
      />

      <View style={{ marginTop: 40 }}>
        <Button title='清空' onPress={clearValues} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
});

const Index = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

export default Index