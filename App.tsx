import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store';
import { theme } from './src/theme';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
