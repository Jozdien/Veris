import { StyleSheet, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const height = dimensions.height;
const width = dimensions.width;

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    header: {
    	flex: 10,
    	justifyContent: 'center',
    	marginLeft: '5%'
    },
    firstbuffer: {
    	flex: 1,
    },
    weekPicker: {
    	flex: 6,
    },
    dayPicker: {
    	flex: 8,
    },
    attendance: {
    	flex: 59,
    },
    date: {

    },
    classes: {

    },
    class: {

    },
    classNameView: {

    },
    checkView: {

    },
    attendanceText: {
    	fontSize: height/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
})