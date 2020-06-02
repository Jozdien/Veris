import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
  }
  static navigationOptions={
    headerShown: false
  }

  login = () => {
    this.props.navigation.navigate("Profile");
  };

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.firstbufferone}/>
        <View style={styles.verisView}>
          <Text style={styles.veris}>V E R I S</Text>
        </View>
        <View style={styles.fieldsView}>
          <View style={styles.emailView}>
            <TextInput keyboardType="email-address" maxlength={320} placeholder="Email" placeholderTextColor="#909090" 
                       onChangeText={(email) => this.setState({email})} style={styles.input}>
            </TextInput>
          </View>
          <View style={styles.passwordView}>
            <TextInput secureTextEntry={true} maxlength={320} placeholder="Password" placeholderTextColor="#909090"
                       onChangeText={(password) => this.setState({password})} style={styles.input}>
            </TextInput>
          </View>
        </View>
        <View style={styles.firstbuffertwo}/>
        <View style={styles.loginView}>
          <TouchableOpacity style={styles.loginInnerView} onPress={() => this.login()}>
            <Text style={styles.login}>Log In{this.state.password}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotView}>
          <TouchableOpacity style={styles.forgotInnerView}>
            <Text style={styles.forgot}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.firstbufferthree}/>
      </View>
    );
  }
}