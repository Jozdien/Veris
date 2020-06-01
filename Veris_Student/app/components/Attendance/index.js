import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      date: "",
      day: 13,
      month: "",
      year: 2001,
      week: "",
      start: 0,
      end: 0,
      selected: 0,
      classes: [{id: 1,
                 name: "Probability Distributions, Transforms, and Numerical Methods",
                 check: 0},
                {id: 2,
                 name: "Probability Distributions, Transforms, and Numerical Methods",
                 check: 0},
                {id: 3,
                 name: "Probability Distributions, Transforms, and Numerical Methods",
                 check: 0},
                {id: 4,
                 name: "Probability Distributions, Transforms, and Numerical Methods",
                 check: 0},
                {id: 5,
                 name: "Probability Distributions, Transforms, and Numerical Methods",
                 check: 0},
                {id: 6,
                 name: "Probability Distributions, Transforms, and Numerical Methods",
                 check: 0},
                {id: 7,
                 name: "Probability Distributions, Transforms, and Numerical Methods",
                 check: 0},]
    }
  }
  static navigationOptions={
    headerShown: false
  }

  componentDidMount() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var week = "";
    var start = 0;
    var end = 0;
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                       ];
    if(day < 4)
    {
      week = "1-7 " + monthNames[month] + " " + year;
      start = 1;
      end = 7;
    }
    else if(day > 28 && (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11))
    {
      week = "25-31 " + monthNames[month] + " " + year;
      start = 25;
      end = 31;
    }
    else if(day > 27 && (month == 3 || month == 5 || month == 8 || month == 10))
    {
      week = "24-30 " + monthNames[month] + " " + year;
      start = 24;
      end = 30;
    }
    else if(day > 25 && month == 1 && year%4 > 0)
    {
      week = "22-28 February " + year;
      start = 22;
      end = 28;
    }
    else
    {
      week = "23-29 February " + year;
      start = 23;
      end = 29;
    }
    this.setState({date: date, day: day, month: monthNames[month], year: year, week: week, start: start, end: end});
    StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <Text style={styles.attendanceText}>Attendance</Text>
        </View>
        <View style={styles.firstbuffer}/>
        <View style={styles.weekPicker}>
          <Icon name="angle-left" size={20}/>
          <Text style={styles.weekDate}>{this.state.week}</Text>
          <Icon name="angle-right" size={20}/>
        </View>
        <View style={styles.dayPicker}>
        </View>
        <View style={styles.attendance}>
          <View style={styles.date}>
          </View>
          <View style={styles.classes}>
            <FlatList
            data={this.state.classes}
            extraData={this.state.classes}
            renderItem={({item}) => (
              <View style={styles.class}>
                <View style={styles.classNameView}>
                  <Text style={styles.className}></Text>
                </View>
                <View style={styles.checkView}>
                </View>
              </View>
            )}>
          </FlatList>
          </View>
        </View>
      </View>
    );
  }
}