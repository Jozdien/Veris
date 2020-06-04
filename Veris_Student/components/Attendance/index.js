import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      date: "",
      display: "",
      classes: [{id: 1,
                 name: "Class Name",
                 check: 1},
                {id: 2,
                 name: "Class Name",
                 check: 1},
                {id: 3,
                 name: "Class Name",
                 check: 1},
                {id: 4,
                 name: "Class Name",
                 check: 1},
                {id: 5,
                 name: "Class Name",
                 check: 1},
                {id: 6,
                 name: "Class Name",
                 check: -1},
                {id: 7,
                 name: "Class Name",
                 check: -1},
                {id: 8,
                 name: "Class Name",
                 check: -1},
                {id: 9,
                 name: "Class Name",
                 check: 1},]
    }
  }
  static navigationOptions={
    headerShown: false
  }

  dateChange = (date) => {
    console.log(date);
    var day = date.slice(8);
    var month = parseInt(date.slice(5,7));
    var year = date.slice(0,4);
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    var display = day + " " + monthNames[month] + " " + year;
    this.setState({date: date, display: display});
  };

  componentDidMount() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    var display = day + " " + monthNames[month] + " " + year;
    this.setState({date: date, display: display});
    StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <Text style={styles.attendanceText}>Attendance</Text>
        </View>
        <View style={styles.firstbufferone}/>
        <View style={styles.datePickerView}>
          <DatePicker
            style={styles.datePicker}
            date={this.state.date}
            mode="date"
            format="YYYY-MM-DD"
            minDate="2001-02-20"
            maxDate="2030-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateIcon: styles.dateIcon,
              dateInput: styles.dateInput,
              dateText: styles.datePickerText,
            }}
            onDateChange={(date) => {this.dateChange(date)}}
          />
        </View>
        <View style={styles.firstbuffertwo}/>
        <View style={styles.attendance}>
          <View style={styles.dateView}>
            <Text style={styles.date}>{this.state.display}</Text>
          </View>
          <View style={styles.classes}>
            <FlatList
            data={this.state.classes}
            extraData={this.state.classes}
            renderItem={({item}) => (
              <View style={styles.class}>
                <View style={styles.classNameView}>
                  <Text style={styles.className}>{item.name}</Text>
                </View>
                <View style={styles.checkView}>
                  {
                    item.check == 1 ?
                      <View style={styles.alignCenter}>
                        <Icon name="check" size={25} color="#E56967"/>
                      </View>
                    : item.check == -1 ?
                      <View style={styles.alignCenter}>
                        <Icon name="cross" size={25} color="#E56967"/>
                      </View>
                      : null
                  }
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