import React from 'react';
import {View, Text, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      fees: [{id: 1,
              title: "Semester 4 - Tuition Fees", 
              due: "10th June",
              amount: "8200/2100/520",
              selected: false},
             {id: 2,
              title: "Semester 4 - Bus Fees", 
              due: "10th June",
              amount: "570/200/50",
              selected: false},
             {id: 3,
              title: "Semester 4 - Hostel Fees", 
              due: "10th June",
              amount: "1600/450/120",
              selected: false},
            ],
      selected: 0,
      title: "",
      category_one: "",
      category_two: "",
      category_three: "",
      date: "",
      visibility_add: false
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
    let selected = this.state.selected;
    if(item.selected)
    {
      this.setState({selected: selected + 1});
    }
    else
    {
      this.setState({selected: selected - 1});
    }
  };

  delete =() => {

  };

  dateChange = (date) => {
    this.setState({date: date});
  };

  save = () => {
    this.setState({visibility_add: false});
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
                    <View style={styles.topView}>
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
                    <View style={styles.topView}>
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
          {
            this.state.selected == 0 ?
              <TouchableOpacity style={styles.footerButton} onPress={() => {this.setState({visibility_add: true})}}>
                <Text style={styles.footerText}>Add</Text>
              </TouchableOpacity>
            :
              <TouchableOpacity style={styles.footerButton} onPress={() => {this.delete()}}>
                <Text style={styles.footerText}>Delete</Text>
              </TouchableOpacity>
          }
        </View>
        <Modal isVisible={this.state.visibility_add}>
          <View style={styles.modalScreen_add}>
            <View style={styles.secondbufferone}/>
            <View style={styles.modal_add}>
              <View style={styles.modal_Header}>
                <TextInput maxlength={60} placeholder="Fees Title" placeholderTextColor="#909090" multiline={true} 
                           onChangeText={(title) => this.setState({title: title})} style={styles.modal_Headertext}></TextInput>
              </View>
              <View style={styles.modal_Date}>
                <Text style={styles.modal_Datetext}>Due Date: </Text>
                <DatePicker
                  style={styles.datePicker}
                  date={this.state.date}
                  mode="date"
                  format="MMMM Do YYYY"
                  minDate="2001-02-20"
                  maxDate="2030-12-31"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput: styles.dateInput,
                    dateText: styles.datePickerText,
                  }}
                  onDateChange={(date) => {this.dateChange(date)}}
                />
              </View>
              <View style={styles.modal_Amounts}>
                <View style={styles.modal_categoryOne}>
                  <Text style={styles.modal_categoryText}>Category One: </Text>
                  <TextInput maxlength={4} placeholder="" onChangeText={(category_one) => this.setState({category_one: category_one})} 
                             style={styles.modal_Onetext}></TextInput>
                </View>
                <View style={styles.modal_categoryTwo}>
                  <Text style={styles.modal_categoryText}>Category Two: </Text>
                  <TextInput maxlength={4} placeholder="" onChangeText={(category_two) => this.setState({category_two: category_two})} 
                             style={styles.modal_Twotext}></TextInput>
                </View>
                <View style={styles.modal_categoryThree}>
                  <Text style={styles.modal_categoryText}>Category Three: </Text>
                  <TextInput maxlength={4} placeholder="" onChangeText={(category_three) => this.setState({category_three: category_three})} 
                             style={styles.modal_Threetext}></TextInput>
                </View>
              </View>
              <View style={styles.modal_Footer}>
                <TouchableOpacity style={styles.modal_save} onPress={() => {this.save()}}>
                  <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modal_close} onPress={() => {this.setState({visibility_add: false})}}>
                  <Text style={styles.close}>Close</Text>
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