import React from 'react';
import {View, Text, Image, FlatList, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      notifications: [{id: 1,
                       title: "Notification", 
                       description: "Notification description"},
                      {id: 2,
                       title: "Notification", 
                       description: "Notification description"}
                     ],
      notification: {id: 1,
                     title: "Notification", 
                     description: "Notification description"},
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
      class: "Course Name",
      visibility: false,
      visibility_add: false,
      visibility_class: false
    }
  }
  static navigationOptions={
    headerShown: false
  }

  notificationsshow = (item) => {
    this.setState({notification: item});
    this.setState({visibility: true})
  };

  addshow = () => {
    this.setState({visibility_add: true})
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
          <View style={styles.notificationsTextView}>
            <Text style={styles.notifications}>Notifications</Text>
          </View>
        </View>
        <View style={styles.classView}>
          <TouchableOpacity style={styles.classSelect} onPress={() => {this.setState({visibility_class: true})}}>
            <Text style={styles.classSelectText} numberOfLines={1} ellipsizeMode="tail">{this.state.class}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.firstbuffer}/>
        <View style={styles.notificationsContainer}>
          <FlatList
            data={this.state.notifications}
            extraData={this.state.notifications}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={100}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.notificationsView} onPress={() => this.notificationsshow(item)}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.descriptionView}>
                  <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
                </View>
              </TouchableOpacity>
            )}>
          </FlatList>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton} onPress={() => {this.addshow()}}>
            <Text style={styles.add}>Add</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.visibility_add}>
          <View style={styles.modalScreen_add}>
            <View style={styles.secondbufferone}/>
            <View style={styles.modal_add}>
              <View style={styles.modalHeadView_add}>
                <TextInput maxlength={320} placeholder="Notification Title" placeholderTextColor="#909090" 
                           onChangeText={(title) => this.setState({title})} style={styles.modalHead_add}></TextInput>
              </View>
              <View style={styles.modalDescriptionView_add}>
                <ScrollView>
                  <TextInput maxlength={2000} placeholder="Notification Description" placeholderTextColor="#909090" multiline={true} 
                             onChangeText={(description) => this.setState({description})} style={styles.modalDescription_add}></TextInput>
                </ScrollView>
              </View>
              <TouchableOpacity style={styles.modalClose_add} onPress={() => {this.setState({visibility_add: false})}}>
                <TouchableOpacity style={styles.saveView_add} onPress={() => {this.save()}}>
                  <Text style={styles.close}>
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeView_add} onPress={() => {this.setState({visibility_add: false})}}>
                  <Text style={styles.close}>
                    Close
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <View style={styles.secondbuffertwo}/>
          </View>
        </Modal>
        <Modal isVisible={this.state.visibility}>
          <View style={styles.modalScreen}>
            <View style={styles.secondbufferone}/>
            <View style={styles.modal}>
              <View style={styles.thirdbuffer}/>
              <View style={styles.scrollContainer}>
                <ScrollView>
                  <View style={styles.modalHeadView}>
                      <Text style={styles.modalHead}>{this.state.notification.title}</Text>
                  </View>
                  <View style={styles.modalDescriptionView}>
                      <Text style={styles.modalDescription}>{this.state.notification.description}</Text>
                  </View>
                </ScrollView>
              </View>
              <TouchableOpacity style={styles.closeView} onPress={() => {this.setState({visibility: false})}}>
                <Text style={styles.close}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.secondbuffertwo}/>
          </View>
        </Modal>
        <Modal isVisible={this.state.visibility_class}>
          <View style={styles.modalScreen_class}>
            <View style={styles.fourthbuffer}/>
            <View style={styles.modal_class}>
              <View style={styles.fifthbuffer}/>
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
              <View style={styles.fifthbuffer}/>
            </View>
            <View style={styles.fourthbuffer}/>
          </View>
        </Modal>
      </View>
    );
  }
}