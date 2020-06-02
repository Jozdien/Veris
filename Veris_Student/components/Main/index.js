import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
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
        <View style={styles.firstbufferone}/>
        <View style={styles.portalOuterView}>
          <View style={styles.secondbuffer}/>
          <View style={styles.portalInnerView}>
            <ShadowView style={styles.portalShadow}>
              <TouchableOpacity style={styles.portalButton} onPress={() => this.props.navigation.navigate("Login")}>
                <Icon name="ios-school" size={65}/>
              </TouchableOpacity>
            </ShadowView>
            <View style={styles.portalTextView}>
              <Text style={styles.portalText}>Student Portal</Text>
            </View>
          </View>
          <View style={styles.secondbuffer}/>
        </View>
        <View style={styles.firstbuffertwo}/>
        <View style={styles.ENOuterView}>
          <View style={styles.thirdbuffer}/>
          <View style={styles.eventsView}>
            <ShadowView style={styles.eventsShadow}>
              <TouchableOpacity style={styles.eventsButton} onPress={() => this.props.navigation.navigate("Events")}>
                <Icon2 name="event" size={40}/>
              </TouchableOpacity>
            </ShadowView>
            <View style={styles.eventsTextView}>
              <Text style={styles.eventsText}>Events</Text>
            </View>
          </View>
          <View style={styles.fourthbuffer}/>
          <View style={styles.newsView}>
            <ShadowView style={styles.newsShadow}>
              <TouchableOpacity style={styles.newsButton} onPress={() => this.props.navigation.navigate("News")}>
                <Icon3 name="newspaper-o" size={35}/>
              </TouchableOpacity>
            </ShadowView>
            <View style={styles.newsTextView}>
              <Text style={styles.newsText}>News</Text>
            </View>
          </View>
          <View style={styles.thirdbuffer}/>
        </View>
        <View style={styles.firstbufferthree}/>
      </View>
    );
  }
}