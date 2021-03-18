import React from 'react';
import {
  View, SafeAreaView, Image, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../common/StoreUtils';
import { SignIn } from '../../actions/UserAction'
import Button from '../../components/Button';

function Login(props) {

  const onLogin = () => {
    SignIn()
  }

  return (
    <>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <Button onPress={onLogin} label={'Login'} />
        </View>
      </SafeAreaView>
    </>
  )
};

export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});