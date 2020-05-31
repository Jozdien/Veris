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
              title: "Regarding the KTU Tech Fest", 
              description: "The KTU Tech Fest is scheduled to take place on the 26th of June, 2020.  It will be huge."},
             {id: 2,
              title: "College Policy on Online Classes and Coursework", 
              description: "Due to the coronavirus breakout, the college has been temporarily switched to handling classes on the inter-web."}
            ],
      new: {id: 1,
            title: "Regarding the KTU Tech Fest", 
            description: "The KTU Tech Fest is scheduled to take place on the 26th of June, 2020.  It will be huge."},
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
              <View style={styles.modalHeadView}>
                <Text style={styles.modalHead}>{this.state.new.title}</Text>
              </View>
              <View style={styles.modalDescriptionView}>
                <ScrollView>
                  <Text style={styles.modalDescription}>{this.state.new.description}</Text>
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