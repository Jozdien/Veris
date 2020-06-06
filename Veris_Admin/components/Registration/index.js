import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      id: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      gender: "",
      nationality: "",
      password: "",
    }
  }
  static navigationOptions={
    headerShown: false
  }

  update = (attrName, value) => {
    this.setState({[attrName]: value});
  };

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Registration</Text>
        </View>
        <View style={styles.firstbufferone}/>
        <View style={styles.body}>
          <TextInput maxlength={320} placeholder="Email or Number" placeholderTextColor="#C0C0C0"
                     onChangeText={(id) => this.setState({id: id})} style={styles.field}></TextInput>
          <TextInput maxlength={50} placeholder="First Name" placeholderTextColor="#C0C0C0"
                     onChangeText={(firstName) => this.setState({firstName: firstName})} style={styles.field}></TextInput>
          <TextInput maxlength={50} placeholder="Middle Name" placeholderTextColor="#C0C0C0"
                     onChangeText={(middleName) => this.setState({middleName: middleName})} style={styles.field}></TextInput>
          <TextInput maxlength={50} placeholder="Last Name" placeholderTextColor="#C0C0C0"
                     onChangeText={(lastName) => this.setState({lastName: lastName})} style={styles.field}></TextInput>
          <TextInput maxlength={50} placeholder="Last Name" placeholderTextColor="#C0C0C0"
                     onChangeText={(lastName) => this.setState({lastName: lastName})} style={styles.field}></TextInput>
          <TextInput maxlength={40} placeholder="Gender" placeholderTextColor="#C0C0C0"
                     onChangeText={(gender) => this.setState({gender: gender})} style={styles.field}></TextInput>
          <TextInput maxlength={40} placeholder="Nationality" placeholderTextColor="#C0C0C0"
                     onChangeText={(nationality) => this.setState({nationality: nationality})} style={styles.field}></TextInput>
          <TextInput maxlength={64} placeholder="Password" placeholderTextColor="#C0C0C0"
                     onChangeText={(password) => this.setState({password: password})} style={styles.field}></TextInput>
        </View>
        <View style={styles.firstbuffertwo}/>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={() => {this.setState({visibility_add: true})}}>
            <Text style={styles.footerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}