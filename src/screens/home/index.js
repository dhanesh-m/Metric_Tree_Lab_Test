import React from 'react';
import {
  View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../common/StoreUtils';
import Button from '../../components/Button';

function Home(props) {

  const { navigation } = props;

  const onNavigate = () => {
    navigation.navigate('Profile')
  }

  return (
    <>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <Text>Home</Text>
          <Button onPress={onNavigate} label={'Go To Profile'} />
        </View>
      </SafeAreaView>
    </>
  )
};

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});