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
    firstbufferone: {
    	flex: 2,
    },
    datePickerView: {
    	flex: 7,
        justifyContent: 'center',
    },
    datePicker: {
        flex: 1,
        alignSelf: 'center'
    },
    dateIcon: {
        position: 'absolute',
    },
    dateInput: {
        height: '120%',
        borderColor: '#E56967',
        borderRadius: 5,
    },
    firstbuffertwo: {
        flex: 2,
    },
    attendance: {
    	flex: 63,
        backgroundColor: '#202030',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 3,
    },
    dateView: {
        flex: 1,
        marginLeft: '6%',
        justifyContent: 'center',
    },
    classes: {
        flex: 5,
    },
    class: {
        flexDirection: 'row',
        marginLeft: '8%',
        marginRight: '5%',
        marginBottom: '4%',
    },
    classNameView: {
        flex: 7,
    },
    checkView: {
        flex: 1,
    },
    alignCenter: {
        alignSelf: 'center'
    },
    attendanceText: {
    	fontSize: height/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    datePickerText: {
        fontSize: width/25,
        fontFamily: 'Montserrat-Medium',
        color: '#D0D0D0'
    },
    date: {
        fontSize: height/27,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-Medium',
    },
    className: {
        fontSize: width/25,
        color: '#D0D0D0',
        fontFamily: 'Montserrat-Regular',
    },  
})