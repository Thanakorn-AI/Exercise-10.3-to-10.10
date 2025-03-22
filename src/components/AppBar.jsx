// rate-repository-app/src/components/AppBar.jsx
const { View, StyleSheet, ScrollView } = require('react-native');
const { Pressable } = require('react-native');
const { Link } = require('react-router-native');
const { SafeAreaView } = require('react-native-safe-area-context');
const Text = require('./Text');
const theme = require('../theme');

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

const AppBarTab = ({ to, children }) => (
  <Pressable style={styles.tab}>
    <Link to={to}>
      <Text color="white" fontWeight="bold">
        {children}
      </Text>
    </Link>
  </Pressable>
);

const AppBar = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </SafeAreaView>
  );
};

module.exports = AppBar;