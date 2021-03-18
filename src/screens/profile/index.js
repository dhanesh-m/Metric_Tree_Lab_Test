import React from 'react';
import {
  View, Text, SafeAreaView, Image, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../common/StoreUtils';
import { SignOut } from '../../actions/UserAction'
import Button from '../../components/Button';

function Profile(props) {

  const onLogout = () => {
    SignOut()
  }

  return (
    <>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <Text>Profile</Text>
          <Button onPress={onLogout} label={'Logout'} />
        </View>
      </SafeAreaView>
    </>
  )
};

export default connect(mapStateToProps)(Profile)

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