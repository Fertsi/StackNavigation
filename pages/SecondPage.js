import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
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
        <Text style={styles.text}>This is Second Page of the App</Text>
        <Button
          style={styles.button}
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button
          style={styles.button}
          title="Go to SecondPage... again"
          onPress={() => navigation.push('SecondPage')}
        />
        <Button
          style={styles.button}
          title="Replace this screen with Third Page"
          onPress={() =>
            navigation.replace('ThirdPage', {
              someParam: 'Param',
            })
          }
        />
        <Button
          style={styles.button}
          title="Reset navigator state to Third Page"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'ThirdPage',
                  params: { someParam: 'reset' },
                },
              ],
            })
          }
        />
        <Button
          style={styles.button}
          title="Go to First Page"
          onPress={() => navigation.navigate('FirstPage')}
        />
        <Button
          style={styles.button}
          title="Go to Third Page"
          onPress={() =>
            navigation.navigate('ThirdPage', { someParam: 'Param1' })
          }
        />
        <Text style={styles.footerText}>Navigate Between Screens using</Text>
        <Text style={styles.footerText}>React Navigation</Text>
        <Text style={styles.footerText}>www.aboutreact.com</Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
