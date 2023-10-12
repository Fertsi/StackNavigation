import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const FirstPage = ({ navigation }) => {
  const styles = {
    container: {
      flex: 1,
      padding: 16,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 16,
    },
    button: {
      marginBottom: 16,
    },
    footerText: {
      fontSize: 18,
      textAlign: 'center',
      color: 'grey',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>This is the First Page of the app</Text>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('SecondPage')}
          title="Go to Second Page"
        />
        <Text style={styles.footerText}>Navigate Between Screens using</Text>
        <Text style={styles.footerText}>React Navigation</Text>
        <Text style={styles.footerText}>www.aboutreact.com</Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
