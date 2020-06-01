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
      fees: [{id: 1,
              title: "Semester 4 - Tuition Fees", 
              due: "10th June",
              amount: 8200,
              selected: false},
             {id: 2,
              title: "Semester 4 - Bus Fees", 
              due: "10th June",
              amount: 570,
              selected: false},
             {id: 3,
              title: "Semester 4 - Hostel Fees", 
              due: "10th June",
              amount: 1600,
              selected: false},
            ],
      total: 0
    }
  }
  static navigationOptions={
    headerShown: false
  }

  select = (item) => {
    item.selected = !(item.selected);
    let fees = this.state.fees;
    fees[item.id - 1] = item;
    this.setState({fees: fees});
    let total = this.state.total;
    if(item.selected)
    {
      this.setState({total: total + item.amount});
    }
    else
    {
      this.setState({total: total - item.amount});
    }
  };

  pay = () => {

  };

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <View style={styles.feesTextView}>
            <Text style={styles.fees}>Fees</Text>
          </View>
        </View>
        <View style={styles.dueView}>
          <Text style={styles.due}>Due Payments</Text>
        </View>
        <View style={styles.firstbuffer}/>
        <View style={styles.feesContainer}>
          <FlatList
            data={this.state.fees}
            extraData={this.state.fees}
            initialNumToRender={5}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={100}
            renderItem={({item}) => (
              <View>
              {
                item.selected ?
                  <TouchableOpacity style={styles.feesSelectedView} onPress={() => {this.select(item)}}>
                    <View style={styles.leftView}>
                      <View style={styles.titleView}>
                        <Text style={styles.title}>{item.title}</Text>
                      </View>
                      <View style={styles.dateView}>
                        <Text style={styles.date}>{item.due}</Text>
                      </View>
                    </View>
                    <View style={styles.amountView}>
                      <Text style={styles.amount}>{item.amount}</Text>
                    </View>
                  </TouchableOpacity>
                :
                  <TouchableOpacity style={styles.feesView} onPress={() => {this.select(item)}}>
                    <View style={styles.leftView}>
                      <View style={styles.titleView}>
                        <Text style={styles.title}>{item.title}</Text>
                      </View>
                      <View style={styles.dateView}>
                        <Text style={styles.date}>{item.due}</Text>
                      </View>
                    </View>
                    <View style={styles.amountView}>
                      <Text style={styles.amount}>{item.amount}</Text>
                    </View>
                  </TouchableOpacity>
              }
              </View>
            )}>
            </FlatList>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.payButton} onPress={() => {this.pay()}}>
            <Text style={styles.pay}>Pay ₹{this.state.total}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}