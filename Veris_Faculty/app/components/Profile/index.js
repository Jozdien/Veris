import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  static navigationOptions={
    headerShown: false
  }

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>

      </View>
    );
  }
}