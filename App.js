import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

import firebase from './firebase';

const auth = firebase.auth();
const database = firebase.database();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  getFireBaseContent() {
    database.ref().once('value').then((snapshot) => {
      console.log('Snapshot: ', snapshot.val()["Today"])
      this.setState({
        content: snapshot.val()["Today"],
        isLoading: false
      })
    })
  }

  componentDidMount() {
    this.getFireBaseContent()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading content from db</Text>
        </View>
      )
    } else {
      const dbContent = this.state.content
      return (
        <View style={styles.container}>
          <Text>Content from db</Text>
          <Text>{dbContent}</Text>
        </View>
      )
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
