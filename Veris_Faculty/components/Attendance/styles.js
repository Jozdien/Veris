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
    	flex: 18,
    	flexDirection: 'row',
    },
    headerTextView: {
    	flex: 10,
    	marginLeft: '5%',
    	justifyContent: 'center'
    },
    dateView: {
    	flex: 6,
    	justifyContent: 'center',
    },
    datePicker: {
    	alignSelf: 'center',
    	width: '80%',
    },
    dateInput: {
    	borderRadius: 5,
    	borderColor: '#101010',
    	backgroundColor: '#202030',
    	elevation: 2,
    },
    class: {
    	flex: 12,
    	justifyContent: 'flex-start'
    },
    classView: {
    	height: '80%',
    	width: '91%',
    	marginLeft: '5%',
    	paddingLeft: '3%',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    	elevation: 2,
    },
    classSelect: {
    	flex: 1,
    	justifyContent: 'center',
    },
    toggleAndLegend: {
    	flex: 10,
    	flexDirection: 'row',
    },
    toggleView: {
    	flex: 5,
    	justifyContent: 'center'
    },
    toggle: {
    	width: '60%',
    	height: '80%',
    	marginLeft: '12%',
    	justifyContent: 'center',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    	elevation: 2,
    },
    legendView: {
    	flex: 7,
    	flexDirection: 'row',
    },
    present: {
    	flex: 1,
    	flexDirection: 'row',
    },
    presentColour: {
    	flex: 5,
    	height: '90%',
    	alignSelf: 'center',
    	borderRadius: 5,
    	backgroundColor: '#E56967',
    	elevation: 6,
    },
    presentTextView: {
    	flex: 8,
    	marginLeft: '5%',
    	justifyContent: 'center',
    },
    absent: {
    	flex: 1,
    	flexDirection: 'row'
    },
    absentColour: {
    	flex: 5,
    	height: '90%',
    	alignSelf: 'center',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    	elevation: 3,
    },
    absentTextView: {
    	flex: 8,
    	marginLeft: '5%',
    	justifyContent: 'center',
    },
    thirdbuffer: {
    	flex: 6,
    },
    body: {
    	flex: 84,
    	marginLeft: '5%',
    },
    box: {
    	width: '12%',
    	marginRight: '8.5%',
    	marginBottom: '7%',
    },
    boxPresent: {
    	flex: 1,
    	borderRadius: 5,
    	paddingTop: '24%',
    	paddingBottom: '24%',
    	justifyContent: 'center',
    	backgroundColor: '#E56967',
    	elevation: 6,
    },
    boxAbsent: {
    	flex: 1,
    	borderRadius: 5,
    	paddingTop: '24%',
    	paddingBottom: '24%',
    	justifyContent: 'center',
    	backgroundColor: '#202030',
    	elevation: 3,
    },
    footer: {
    	flex: 18,
    	backgroundColor: '#202035',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center'
    },
    footerButton: {
    	width: '40%',
        height: '65%',
        backgroundColor: '#E56967',
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    modalScreen_class: {
    	flex: 1,
    	flexDirection: 'row'
    },
    firstbuffer: {
    	flex: 1,
    },
    modal_class: {
    	flex: 4,
    },
    secondbuffer: {
    	flex: 7,
    },
    modalOptions: {
    	flex: 14,
    	borderTopLeftRadius: 5,
    	borderTopRightRadius: 5,
    	backgroundColor: '#101010'
    },
    option: {
    	flex: 2,
    	paddingTop: '7.1%',
    	paddingBottom: '7.1%',
    	borderBottomWidth: 0.2,
    	borderColor: '#606060',
    	justifyContent: 'center'
    },
    modalClose_class: {
    	flex: 3,
    	borderBottomLeftRadius: 5,
    	borderBottomRightRadius: 5,
    	borderTopWidth: 0.7,
    	borderColor: '#C0C0C0',
    	backgroundColor: '#101010',
    	justifyContent: 'center'
    },
    headerText: {
    	fontSize: width*1.66111111111/20,
    	fontFamily: 'Montserrat-Bold',
    	color: '#F0F0F0',
    },
    datePickerText: {
    	fontSize: width/32,
    	fontFamily: 'Montserrat-Regular',
    	color: '#D0D0D0'
    },
    classText: {
    	fontSize: width/28,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0'
    },
    toggleText: {
    	fontSize: width/32,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0',
    	textAlign: 'center'
    },
    presentText: {
    	fontSize: width/30,
    	fontFamily: 'Montserrat-Medium',
    	color: '#D0D0D0',
    },
    absentText: {
    	fontSize: width/30,
    	fontFamily: 'Montserrat-Medium',
    	color: '#D0D0D0',
    },
    boxText: {
    	fontSize: width/26,
    	fontFamily: 'Montserrat-SemiBold',
    	color: '#F0F0F0',
    	textAlign: 'center'
    },
    footerText: {
    	fontSize: width*1.66111111111/30,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
    optionText: {
    	fontSize: width/24,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    	textAlign: 'center'
    },
    close: {
    	fontSize: width*1.66111111111/36,
        color: '#E0E0E0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
})
