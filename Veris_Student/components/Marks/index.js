import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
    	visibility: false,
    	semester: "1",
    	courses: [{id: 1,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },
    						{id: 2,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },
    						{id: 3,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },
    						{id: 4,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },
    						{id: 5,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },
    						{id: 6,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },
    						{id: 7,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },
    						{id: 8,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },
    						{id: 9,
    						 name: "Course Name",
    						 series_1: "32/40",
    						 series_2: "32/40",
    						 final: "80/100",
    						 grade: "A+",
    						 attendance: 75,
    						 },

    					 ],
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
      	<View style={styles.header}>
      		<View style={styles.coursesTextView}>
	      		<Text style={styles.courses}>Courses</Text>
  				</View>
  				<View style={styles.semesterSelectView}>
  					<View style={styles.firstbuffer}/>
  					<TouchableOpacity style={styles.semesterSelect} onPress={() => {this.setState({visibility: true})}}>
  						<Text style={styles.semesterSelectText}>S{this.state.semester}</Text>
  					</TouchableOpacity>
  					<View style={styles.firstbuffer}/>
  				</View>
      	</View>
      	<View style={styles.coursesContainer}>
      		<FlatList
            data={this.state.courses}
            extraData={this.state.courses}
            renderItem={({item}) => (
              <View style={styles.courseView} onPress={() => this.newsshow(item)}>
              	<View style={styles.nameMarks}>
              		<View style={styles.nameView}>
	              		<Text style={styles.name}>{item.name}</Text>
  								</View>
              		<View style={styles.seriesView}>
              			<Text style={styles.seriesOne}>Series 1: {item.series_1}</Text>
              			<Icon name="dot-single" size={18} color="#B0B0B0"/>
              			<Text style={styles.seriesTwo}>Series 2: {item.series_2}</Text>
              		</View>
              		<View style={styles.finalView}>
              			<Text style={styles.final}>Final Exam: {item.final}</Text>
              		</View>
              	</View>
              	<View style={styles.attendanceGrade}>
	                <ProgressCircle percent={item.attendance} radius={40} borderWidth={4}
				            color="#E56967" shadowColor="#101010" bgColor="#101010">
					            <Text style={styles.circleText}>{item.attendance}%</Text>
					        </ProgressCircle>
					        <View style={styles.gradeView}>
						        <Text style={styles.grade}>Grade: {item.grade}</Text>
									</View>
					      </View>
              </View>
            )}>
          </FlatList>
      	</View>
      	<Modal isVisible={this.state.visibility}>
      		<View style={styles.modalScreen}>
      			<View style={styles.thirdbuffer}/>
      			<View style={styles.modal}>
      				<View style={styles.fourthbuffer}/>
      				<View style={styles.modalOptions}>
      					<TouchableOpacity style={styles.option} onPress={() => {this.setState({semester: "1", visibility: false})}}>
      						<Text style={styles.optionText}>Semester 1</Text>
      					</TouchableOpacity>
      					<TouchableOpacity style={styles.option} onPress={() => {this.setState({semester: "2", visibility: false})}}>
      						<Text style={styles.optionText}>Semester 2</Text>
      					</TouchableOpacity>
      					<TouchableOpacity style={styles.option} onPress={() => {this.setState({semester: "3", visibility: false})}}>
      						<Text style={styles.optionText}>Semester 3</Text>
      					</TouchableOpacity>
      					<TouchableOpacity style={styles.option} onPress={() => {this.setState({semester: "4", visibility: false})}}>
      						<Text style={styles.optionText}>Semester 4</Text>
      					</TouchableOpacity>
      					<TouchableOpacity style={styles.option} onPress={() => {this.setState({semester: "5", visibility: false})}}>
      						<Text style={styles.optionText}>Semester 5</Text>
      					</TouchableOpacity>
      					<TouchableOpacity style={styles.option} onPress={() => {this.setState({semester: "6", visibility: false})}}>
      						<Text style={styles.optionText}>Semester 6</Text>
      					</TouchableOpacity>
      					<TouchableOpacity style={styles.option} onPress={() => {this.setState({semester: "7", visibility: false})}}>
      						<Text style={styles.optionText}>Semester 7</Text>
      					</TouchableOpacity>
      					<TouchableOpacity style={styles.option} onPress={() => {this.setState({semester: "8", visibility: false})}}>
      						<Text style={styles.optionText}>Semester 8</Text>
      					</TouchableOpacity>
      				</View>
      				<TouchableOpacity style={styles.modalClose} onPress={() => {this.setState({visibility: false})}}>
      					<Text style={styles.modalCloseText}>Close</Text>
      				</TouchableOpacity>
      				<View style={styles.fourthbuffer}/>
      			</View>
      			<View style={styles.thirdbuffer}/>
      		</View>
      	</Modal>
      </View>
    );
  }
}