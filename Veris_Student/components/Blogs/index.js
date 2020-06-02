import React from 'react';
import {View, Text, Image, TextInput, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Arun Jose",
      blogs: [{id: 1,
               title: "Blog Head", 
               author: "HJPEV",
               description: "Blog Content",
               category: "Category"},
              {id: 2,
               title: "Blog Head", 
               author: "HJPEV",
               description: "Blog Content",
               category: "Category"},
              {id: 3,
               title: "Blog Head", 
               author: "HJPEV",
               description: "Blog Content",
               category: "Category"},
              {id: 4,
               title: "Blog Head", 
               author: "HJPEV",
               description: "Blog Content",
               category: "Category"},
              {id: 5,
               title: "Blog Head", 
               author: "HJPEV",
               description: "Blog Content",
               category: "Category"},
              {id: 6,
               title: "Blog Head", 
               author: "HJPEV",
               description: "Blog Content",
               category: "Category"}
             ],
      blog: {id: 1,
             title: "Blog Head", 
             author: "HJPEV",
             description: "Blog Content",
             category: "Category"},
      visibility: false,
      visibility_add: false,
      title: "Blog Title",
      category: "Category",
      description: "Blog description"
    }
  }
  static navigationOptions={
    headerShown: false
  }

  blogshow = (item) => {
    this.setState({blog: item});
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
          <View style={styles.blogsTextView}>
            <Text style={styles.blogs}>Blogs</Text>
          </View>
        </View>
        <View style={styles.firstbuffer}/>
        <View style={styles.blogsContainer}>
          <FlatList
            data={this.state.blogs}
            extraData={this.state.blogs}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={100}
            horizontal={false}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.blogsView} onPress={() => this.blogshow(item)}>
                <View style={styles.titleView}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.descriptionView}>
                  <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{item.author}</Text>
                </View>
                <View style={styles.dateView}>
                  <Text style={styles.date}>{item.category}</Text>
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
        <Modal isVisible={this.state.visibility}>
          <View style={styles.modalScreen}>
            <View style={styles.secondbufferone}/>
            <View style={styles.modal}>
              <View style={styles.modalHeadView}>
                <Text style={styles.modalHead}>{this.state.blog.title}</Text>
              </View>
              <View style={styles.modalDateView}>
                <Text style={styles.modalDate}>{this.state.blog.author}<Icon name="dot-single" size={10} color="#B0B0B0"/>{this.state.blog.category}</Text>
              </View>
              <View style={styles.modalDescriptionView}>
                <ScrollView>
                  <Text style={styles.modalDescription}>{this.state.blog.description}</Text>
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
        <Modal isVisible={this.state.visibility_add}>
          <View style={styles.modalScreen}>
            <View style={styles.secondbufferone}/>
            <View style={styles.modal}>
              <View style={styles.modalHeadView}>
                <TextInput maxlength={320} placeholder="Blog Title" placeholderTextColor="#909090" 
                           onChangeText={(title) => this.setState({title})} style={styles.modalHead}></TextInput>
              </View>
              <View style={styles.modalCategoryView}>
                <TextInput maxlength={16} placeholder="Category" placeholderTextColor="#909090" 
                           onChangeText={(category) => this.setState({category})} style={styles.modalCategory}></TextInput>
              </View>
              <View style={styles.modalDescriptionView}>
                <ScrollView>
                  <TextInput maxlength={2000} placeholder="Type in here" placeholderTextColor="#909090" multiline={true} 
                             onChangeText={(description) => this.setState({description})} style={styles.modalDescription}></TextInput>
                </ScrollView>
              </View>
              <View style={styles.bottomView}>
                <TouchableOpacity style={styles.saveView} onPress={() => {this.save()}}>
                  <Text style={styles.close}>
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeView} onPress={() => {this.setState({visibility_add: false})}}>
                  <Text style={styles.close}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.secondbuffertwo}/>
          </View>
        </Modal>
      </View>
    );
  }
}