import React from 'react';
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
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
      visibility: false
    }
  }
  static navigationOptions={
    headerShown: false
  }

  notificationsshow = (item) => {
    this.setState({notification: item});
    this.setState({visibility: true})
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
      </View>
    );
  }
}