import React from 'react';
import {View, Text, Image, FlatList, ScrollView, TextInput, TouchableOpacity} from 'react-native';
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

  addshow = () => {
    this.setState({visibility_add: true})
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
              <View style={styles.newsView}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.descriptionView}>
                  <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
                </View>
              </View>
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
                <ScrollView>
                  <TextInput maxlength={320} placeholder="Announcement Headline" placeholderTextColor="#909090" multiline={true}
                             onChangeText={(title) => this.setState({title: title})} style={styles.modalHead_add}></TextInput>
                </ScrollView>
              </View>
              <View style={styles.modalDescriptionView_add}>
                <ScrollView>
                  <TextInput maxlength={2000} placeholder="Announcement Content" placeholderTextColor="#909090" multiline={true} 
                             onChangeText={(description) => this.setState({description: description})} style={styles.modalDescription_add}></TextInput>
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
      </View>
    );
  }
}