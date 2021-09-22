import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';

function Main() {

  const themeContext = React.useContext(ThemeContext);

  return (
    <Layout style={styles.container}>
      <Button onPress={themeContext.toggleTheme}>
        Change Theme
      </Button>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Main;