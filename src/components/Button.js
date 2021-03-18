import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(props) {
    const { label, onPress } = props
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Text>{label}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius:10,
    backgroundColor: 'red'
  }
});