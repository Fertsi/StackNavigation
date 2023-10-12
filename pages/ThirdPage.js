import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ThirdPage = ({ route, navigation }) => {
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
        <Text style={styles.text}>
          This is Third Page of the App
          {'\n'}
          {route.params.someParam}
        </Text>
        {route.params.someParam !== 'reset' ? (
          <Button
            style={styles.button}
            title="Go back"
            onPress={() => navigation.goBack()}
          />
        ) : null}
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('SecondPage')}
          title="Go to Second Page"
        />
        <Button
          style={styles.button}
          title="Reset navigator to First Page"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'FirstPage',
                  params: { someParam: 'reset' },
                },
              ],
            })
          }
        />
        <Text style={styles.footerText}>Navigate Between Screens using{'\n'}React Navigation</Text>
        <Text style={styles.footerText}>www.aboutreact.com</Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
