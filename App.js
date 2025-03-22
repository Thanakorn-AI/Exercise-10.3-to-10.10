// rate-repository-app/App.js
const { StatusBar } = require('expo-status-bar');
const { NativeRouter } = require('react-router-native');
const Main = require('./src/components/Main');

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

module.exports = App;