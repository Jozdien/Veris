import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      classes: [{id: 1,
                 name: "Course Name"},
                {id: 2,
                 name: "Course Name"},
                {id: 3,
                 name: "Course Name"},
                {id: 4,
                 name: "Course Name"},
                {id: 5,
                 name: "Course Name"},],
      students: [{id: 1, no: 1, present: false}, {id: 2, no: 2, present: false},
                 {id: 3, no: 3, present: false}, {id: 4, no: 4, present: false},
                 {id: 5, no: 5, present: false}, {id: 6, no: 6, present: false},
                 {id: 7, no: 7, present: false}, {id: 8, no: 8, present: false},
                 {id: 9, no: 9, present: false}, {id: 10, no: 10, present: false},
                 {id: 11, no: 11, present: false}, {id: 12, no: 12, present: false},
                 {id: 13, no: 13, present: false}, {id: 14, no: 14, present: false},
                 {id: 15, no: 15, present: false}, {id: 16, no: 16, present: false},
                 {id: 17, no: 17, present: false}, {id: 18, no: 18, present: false},
                 {id: 19, no: 19, present: false}, {id: 20, no: 20, present: false},
                 {id: 21, no: 21, present: false}, {id: 22, no: 22, present: false},
                 {id: 23, no: 23, present: false}, {id: 24, no: 24, present: false},
                 {id: 25, no: 25, present: false}, {id: 26, no: 26, present: false},
                 {id: 27, no: 27, present: false}, {id: 28, no: 28, present: false},
                 {id: 29, no: 29, present: false}, {id: 30, no: 30, present: false},
                 {id: 31, no: 31, present: false}, {id: 32, no: 32, present: false},
                 {id: 33, no: 33, present: false}, {id: 34, no: 34, present: false},
                 {id: 35, no: 35, present: false}, {id: 36, no: 36, present: false},
                 {id: 37, no: 37, present: false}, {id: 38, no: 38, present: false},
                 {id: 39, no: 39, present: false}, {id: 40, no: 40, present: false},
                 {id: 41, no: 41, present: false}, {id: 42, no: 42, present: false},
                 {id: 43, no: 43, present: false}, {id: 44, no: 44, present: false},
                 {id: 45, no: 45, present: false}, {id: 46, no: 46, present: false},
                 {id: 47, no: 47, present: false}, {id: 48, no: 48, present: false},
                 {id: 49, no: 49, present: false}, {id: 50, no: 50, present: false},
                 {id: 51, no: 51, present: false}, {id: 52, no: 52, present: false},
                 {id: 53, no: 53, present: false}, {id: 54, no: 54, present: false},
                 {id: 55, no: 55, present: false}, {id: 56, no: 56, present: false},
                 {id: 57, no: 57, present: false}, {id: 58, no: 58, present: false},
                 {id: 59, no: 59, present: false}, {id: 60, no: 60, present: false},
                ],
      class: "Course Name",
      date: "",
      toggle: true,
      visibility_class: false,
    }
  }
  static navigationOptions={
    headerShown: false
  }

  dateChange = (date) => {
    this.setState({date: date});
  };

  toggle = () => {
    let students = this.state.students;
    var i;
    for (i = 0; i < students.length; i++)
    {
      students[i].present = !(students[i].present);
    }
    this.setState({students: students});
  };

  changeAttendance = (item) => {
    item.present = !(item.present);
    let students = this.state.students;
    students[item.id - 1] = item;
    this.setState({students: students});
  };

  save = () => {

  };

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Attendance</Text>
          </View>
          <View style={styles.dateView}>
            <DatePicker
              style={styles.datePicker}
              date={this.state.date}
              mode="date"
              format="MMMM Do YYYY"
              minDate="2001-02-20"
              maxDate="2030-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              customStyles={{
                dateInput: styles.dateInput,
                dateText: styles.datePickerText,
              }}
              onDateChange={(date) => {this.dateChange(date)}}
            />
          </View>
        </View>
        <View style={styles.class}>
          <View style={styles.classView}>
            <TouchableOpacity style={styles.classSelect} onPress={() => {this.setState({visibility_class: true})}}>
              <Text style={styles.classText} numberOfLines={1} ellipsizeMode="tail">{this.state.class}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.toggleAndLegend}>
          <View style={styles.toggleView}>
            <TouchableOpacity style={styles.toggle} onPress={() => {this.toggle()}}>
              {
                this.state.toggle ?
                  <Text style={styles.toggleText}>Mark Present</Text>
                :
                  <Text style={styles.toggleText}>Mark Absent</Text>
              }
            </TouchableOpacity>
          </View>
          <View style={styles.legendView}>
            <View style={styles.present}>
              <View style={styles.presentColour}>
              </View>
              <View style={styles.presentTextView}>
                <Text style={styles.presentText}>Present</Text>
              </View>
            </View>
            <View style={styles.absent}>
              <View style={styles.absentColour}>
              </View>
              <View style={styles.absentTextView}>
                <Text style={styles.absentText}>Absent</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.thirdbuffer}/>
        <View style={styles.body}>
          <FlatList 
            data={this.state.students}
            extraDate={this.state.students}
            horizontal={false}
            numColumns={5}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.box} onPress={() => {this.changeAttendance(item)}}>
                {
                  item.present ? 
                    <View style={styles.boxPresent}>
                      <Text style={styles.boxText}>{item.no}</Text>
                    </View>
                  :
                    <View style={styles.boxAbsent}>
                      <Text style={styles.boxText}>{item.no}</Text>
                    </View>
                }
              </TouchableOpacity>
            )}>
          </FlatList>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={() => {this.save()}}>
            <Text style={styles.footerText}>Save</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.visibility_class}>
          <View style={styles.modalScreen_class}>
            <View style={styles.firstbuffer}/>
            <View style={styles.modal_class}>
              <View style={styles.secondbuffer}/>
              <View style={styles.modalOptions}>
                <FlatList
                  data={this.state.classes}
                  extraData={this.state.classes}
                  renderItem={({item}) => (
                    <TouchableOpacity style={styles.option} onPress={() => {this.setState({class: item.name, visibility_class: false})}}>
                      <Text style={styles.optionText}>{item.name}</Text>
                    </TouchableOpacity>
                  )}>
                </FlatList>
              </View>
              <TouchableOpacity style={styles.modalClose_class} onPress={() => {this.setState({visibility_class: false})}}>
                <Text style={styles.close}>Close</Text>
              </TouchableOpacity>
              <View style={styles.secondbuffer}/>
            </View>
            <View style={styles.firstbuffer}/>
          </View>
        </Modal>
      </View>
    );
  }
}