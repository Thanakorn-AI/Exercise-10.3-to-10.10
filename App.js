// rate-repository-app/App.js
const { StatusBar } = require('expo-status-bar');
const { NativeRouter } = require('react-router-native');
const { SafeAreaProvider } = require('react-native-safe-area-context');
const Main = require('./src/components/Main');

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

module.exports = App;