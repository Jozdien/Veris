import React from 'react';
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      news: [{id: 1,
              title: "Announcement Headline", 
              description: "Announcement description"},
             {id: 2,
              title: "Announcement Headline", 
              description: "Announcement description"}
            ],
      new: {id: 1,
            title: "Announcement Headline", 
            description: "Announcement description"},
      visibility: false
    }
  }
  static navigationOptions={
    headerShown: false
  }

  newsshow = (item) => {
    this.setState({new: item});
    this.setState({visibility: true})
  };

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <View style={styles.newsTextView}>
            <Text style={styles.news}>News</Text>
          </View>
        </View>
        <View style={styles.firstbuffer}/>
        <View style={styles.newsContainer}>
          <FlatList
            data={this.state.news}
            extraData={this.state.news}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={100}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.newsView} onPress={() => this.newsshow(item)}>
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
                      <Text style={styles.modalHead}>{this.state.new.title}</Text>
                  </View>
                  <View style={styles.modalDescriptionView}>
                      <Text style={styles.modalDescription}>{this.state.new.description}</Text>
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