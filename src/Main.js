import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';

function Main() {

  const themeContext = React.useContext(ThemeContext);

  /* 
    The themeContext exposes two values namely 'theme' and 'toggleTheme'
    where the 'theme' just returns what theme the app is running and 
    'toggleTheme' changes it from light to dark or vice versa.
  */

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