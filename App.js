import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Avatar, Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.avatarCont}>
              <Avatar.Image source={require('../loginPage/img/Aang_in_the_Avatar_State.webp')} size={90} />
              <Text variant='headlineLarge' style={styles.avatarTxt}>Welcome</Text>
          </View>
          <View style={styles.loginCont}>
              <Text variant='headlineMedium' style={{marginTop: 10}}>Login</Text>
              <TextInput
              mode='outlined'
              label='Email'
              activeOutlineColor='black'
              style={styles.input}
              />
              <TextInput
              mode='outlined'
              label='Password'
              activeOutlineColor='black'
              style={styles.input}
              />
              <Button
              mode='contained'
              dark={true}
              buttonColor='#9B7EBD'
              style={{width: 300, marginTop: 20}}
              >
                Login
              </Button>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Text variant='titleMedium' style={{marginTop: 5}}>Don't have an account?</Text>
                <Button
                mode='text'
                labelStyle={{fontSize: 17}}
                >
                  Make One
                </Button>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text variant='bodySmall' style={{marginTop: 12}}>Forgot password?</Text>
                <Button
                mode='text'
                >
                  Click Here
                </Button>
              </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  loginCont:{
    backgroundColor: 'white',
    width: '100%',
    height: 500,
    alignItems: 'center',
  },
  avatarCont:{
    width: '100%',
    backgroundColor: '#9B7EBD',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarTxt:{
    fontWeight: 'bold',
    color: 'white',
  },
  input:{
    height: 50, 
    width: 300,
    backgroundColor: 'white',
    marginTop: 20,
  },
});
