import React from 'react';
import {View, Text, Image, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
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
                 name: "Course Name"},
               ],
      students: [{id: 1, no: 1, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 2, no: 2, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 3, no: 3, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 4, no: 4, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 5, no: 5, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 6, no: 6, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 7, no: 7, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 8, no: 8, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 9, no: 9, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 10, no: 10, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 11, no: 11, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 12, no: 12, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 13, no: 13, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 14, no: 14, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 15, no: 15, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 16, no: 16, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 17, no: 17, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 18, no: 18, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 19, no: 19, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 20, no: 20, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 21, no: 21, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 22, no: 22, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 23, no: 23, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 24, no: 24, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 25, no: 25, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 26, no: 26, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 27, no: 27, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 28, no: 28, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false}, 
                 {id: 29, no: 29, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},
                 {id: 30, no: 30, name: "Student Name", register_no: "TVE18CS012", marks: "", max_marks: "", marked: false},  
                ],
      exams: [{id: 1, exam: "Series 1"}, {id: 2, exam: "Series 2"}, {id: 3, exam: "Final Exam"}],
      name: "",
      no: "",
      register_no: "", 
      marks: "",
      temp: "",
      max_marks: "",
      exam: "Series 1",
      class: "Course 1",
      visibility_exam: false,
      visibility_class: false,
      visibility_marks: false,
    }
  }
  static navigationOptions={
    headerShown: false
  }

  boxPress = (item) => {
    this.setState({name: item.name, no: item.no, register_no: item.register_no, visibility_marks: true});
  };

  saveMarks = () => {
    var students = this.state.students;
    var no = this.state.no;
    var student = students[no - 1];
    var temp = this.state.temp;
    student.marks = this.state.marks;
    student.max_marks = temp;
    student.marked = true;
    this.setState({max_marks: temp, students: students, visibility_marks: false});
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
            <Text style={styles.headerText}>Marks</Text>
          </View>
          <View style={styles.examSelectView}>
            <TouchableOpacity style={styles.examSelect} onPress={() => {this.setState({visibility_exam: true})}}>
              <Text style={styles.examSelectText}>{this.state.exam}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.class}>
          <View style={styles.classView}>
            <TouchableOpacity style={styles.classSelect} onPress={() => {this.setState({visibility_class: true})}}>
              <Text style={styles.classText} numberOfLines={1} ellipsizeMode="tail">{this.state.class}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fifthbuffer}/>
        <View style={styles.body}>
          <FlatList 
            data={this.state.students}
            extraDate={this.state.students}
            horizontal={false}
            numColumns={5}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.box} onPress={() => {this.boxPress(item)}}>
                {
                  item.marked ? 
                    <View style={styles.boxMarked}>
                      <Text style={styles.boxText}>{item.no}</Text>
                    </View>
                  :
                    <View style={styles.boxUnMarked}>
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
        <Modal isVisible={this.state.visibility_exam}>
          <View style={styles.modalScreen_exam}>
            <View style={styles.thirdbuffer}/>
            <View style={styles.modal_exam}>
              <View style={styles.fourthbuffer}/>
              <View style={styles.modalExams}>
                <FlatList
                  data={this.state.exams}
                  extraData={this.state.exams}
                  renderItem={({item}) => (
                    <TouchableOpacity style={styles.exam} onPress={() => {this.setState({exam: item.exam, visibility_exam: false})}}>
                      <Text style={styles.optionText}>{item.exam}</Text>
                    </TouchableOpacity>
                  )}>
                </FlatList>
              </View>
              <TouchableOpacity style={styles.modalClose_exam} onPress={() => {this.setState({visibility_exam: false})}}>
                <Text style={styles.close}>Close</Text>
              </TouchableOpacity>
              <View style={styles.fourthbuffer}/>
            </View>
            <View style={styles.thirdbuffer}/>
          </View>
        </Modal>
        <Modal isVisible={this.state.visibility_marks}>
          <View style={styles.modalScreen_marks}>
            <View style={styles.sixthbuffer}/>
            <View style={styles.modal_marks}>
              <View style={styles.seventhbuffer}/>
              <View style={styles.modalMarks}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalName} numberOfLines={1} ellipsizeMode="tail">{this.state.name}<Icon name="dot-single" size={16} color="#B0B0B0"/>{this.state.no}</Text>
                  <Text style={styles.modalID}>{this.state.register_no}</Text>
                </View>
                <View style={styles.modalEnteringMarks}>
                  <View style={styles.eighthbuffer}/>
                  <View style={styles.modalEnteringMarksTextView}>
                    <Text style={styles.modalEnteringMarksText}>Marks:</Text>
                  </View>
                  <View style={styles.modalStudentMarks}>
                    <TextInput maxlength={3} placeholder="" onChangeText={(marks) => this.setState({marks: marks})} 
                                             style={styles.modalHead_add}></TextInput>
                  </View>
                  <View style={styles.modalOutOf}>
                    <Text style={styles.outOf}>/</Text>
                  </View>
                  <View style={styles.modalMaxMarks}>
                    <TextInput maxlength={3} defaultValue={this.state.max_marks} onChangeText={(temp) => this.setState({temp: temp})} 
                                             style={styles.modalHead_add}></TextInput>
                  </View>
                  <View style={styles.eighthbuffer}/>
                </View>
              </View>
              <TouchableOpacity style={styles.modalOK_marks} onPress={() => {this.saveMarks()}}>
                <Text style={styles.close}>OK</Text>
              </TouchableOpacity>
              <View style={styles.seventhbuffer}/>
            </View>
            <View style={styles.sixthbuffer}/>
          </View>
        </Modal>
      </View>
    );
  }
}