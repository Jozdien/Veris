import React from 'react';
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [{id: 1,
                title: "Webinar on Python", 
                description: "Python is one of the most used programming languages in the world.",
                date: "31st December 2020"},
               {id: 2,
                title: "Webinar on Python", 
                description: "Python is one of the most used programming languages in the world.",
                date: "31st December 2020"},
               {id: 3,
                title: "Webinar on Python", 
                description: "Python is one of the most used programming languages in the world.",
                date: "31st December 2020"},
               {id: 4,
                title: "Webinar on Python", 
                description: "Python is one of the most used programming languages in the world.",
                date: "31st December 2020"},
               {id: 5,
                title: "Webinar on Python", 
                description: "Python is one of the most used programming languages in the world.",
                date: "31st December 2020"},
               {id: 6,
                title: "Webinar on Python", 
                description: "Python is one of the most used programming languages in the world.",
                date: "31st December 2020"}
              ],
      event: {id: 1,
              title: "Webinar on Python", 
              description: "Python is one of the most used programming languages in the world.",
              date: "31st December 2020"},
      visibility: false
    }
  }
  static navigationOptions={
    headerShown: false
  }

  eventshow = (item) => {
    this.setState({event: item});
    this.setState({visibility: true})
  };

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <View style={styles.eventsTextView}>
            <Text style={styles.events}>Events</Text>
          </View>
        </View>
        <View style={styles.firstbuffer}/>
        <View style={styles.eventsContainer}>
          <FlatList
            data={this.state.events}
            extraData={this.state.events}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={100}
            horizontal={false}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.eventsView} onPress={() => this.eventshow(item)}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.descriptionView}>
                  <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
                </View>
                <View style={styles.dateView}>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            )}>
          </FlatList>
        </View>
        <Modal isVisible={this.state.visibility}>
          <View style={styles.modalScreen}>
            <View style={styles.secondbufferone}/>
            <View style={styles.modal}>
              <View style={styles.modalHeadView}>
                <Text style={styles.modalHead}>{this.state.event.title}</Text>
              </View>
              <View style={styles.modalDateView}>
                <Text style={styles.modalDate}>{this.state.event.date}</Text>
              </View>
              <View style={styles.modalDescriptionView}>
                <ScrollView>
                  <Text style={styles.modalDescription}>{this.state.event.description}</Text>
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