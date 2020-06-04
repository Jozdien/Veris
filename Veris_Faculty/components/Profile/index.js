import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Entypo';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      picture: require('../assets/default.jpg'),
      name: "Cín est",
      semester: "0",
      id: "TVE00XX000",
      courses: [{id: 1,
                 class: "S0 CSE",
                 code: "XX100", 
                 name: "Course Name"},
                {id: 2,
                 class: "S0 ECE",
                 code: "XX100", 
                 name: "Course Name"},
                {id: 3,
                 class: "S0 EEE",
                 code: "XX100", 
                 name: "Course Name"},
                {id: 4,
                 class: "S0 ME",
                 code: "XX100", 
                 name: "Course Name"},
                {id: 6,
                 class: "S0 CE",
                 code: "XX100",  
                 name: "Course Name"},]
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
        <View style={styles.firstbuffer}/>
        <View style={styles.header}>
          <View style={styles.pictureOuterView}>
            <View style={styles.secondbuffer}/>
            <View style={styles.pictureInnerView}>
              <View style={styles.thirdbuffer}/>
              <Image 
                source={this.state.picture}
                style={styles.picture}
                resize="contain"
              />
              <View style={styles.thirdbuffer}/>
            </View>
            <View style={styles.secondbuffer}/>
          </View>
          <View style={styles.details}>
            <View style={styles.fourthbufferone}/>
            <View style={styles.nameView}>
              <Text style={styles.name} numberOfLines={2}>{this.state.name}<Icon4 name="dot-single" size={16} color="#B0B0B0"/>S{this.state.semester}</Text>
            </View>
            <View style={styles.idView}>
              <Text style={styles.id}>{this.state.id}</Text>
            </View>
            <View style={styles.fourthbuffertwo}/>
          </View>
        </View>
        <View style={styles.coursesView}>
          <Text style={styles.courses}>Courses</Text>
        </View>
        <View style={styles.fifthbuffer}/>
        <View style={styles.courseContainer}>
          <FlatList
            data={this.state.courses}
            extraData={this.state.courses}
            renderItem={({item}) => (
              <View>
                <View style={styles.classView}>
                  <Text style={styles.class}>{item.class}</Text>
                </View>
                <View style={styles.courseView}>
                  <View style={styles.courseCodeView}>
                    <Text style={styles.courseCode}>{item.code}</Text>
                  </View>
                  <View style={styles.courseNameView}>
                    <Text style={styles.courseName}>{item.name}</Text>
                  </View>
                </View>
              </View>
            )}>
          </FlatList>
        </View>
        <ActionButton buttonColor="rgba(229, 105, 103, 1)" btnOutRange="rgba(229, 105, 103, 1)" degrees={45}>
          <ActionButton.Item buttonColor='#E56999' title="Attendance" onPress={() => {this.props.navigation.navigate("Attendance")}}>
            <Icon name="md-calendar" size={18}/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#E569B5' title="Marks" onPress={() => {this.props.navigation.navigate("Marks")}}>
            <Icon name="ios-school" size={20}/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#E569C5' title="Notifications" onPress={() => {this.props.navigation.navigate("Notifications")}}>
            <Icon name="ios-notifications" size={20}/>
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}