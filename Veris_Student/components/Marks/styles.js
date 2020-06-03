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
    	flex: 20,
    	flexDirection: 'row'
    },
    coursesTextView: {
    	flex: 2,
    	justifyContent: 'center',
    	marginLeft: '5%'
    },
    semesterSelectView: {
    	flex: 1,
    	justifyContent: 'center'
    },
    firstbuffer: {
    	flex: 1,
    },
    semesterSelect: {
    	flex: 2,
    	width: '70%',
    	alignSelf: 'center',
    	justifyContent: 'center',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    	elevation: 1,
    },
    coursesContainer: {
    	flex: 128,
    },
    courseView: {
    	flex: 1,
    	flexDirection: 'row',
    	width: '90%',
    	marginBottom: '5%',
    	alignSelf: 'center',
    	borderRadius: 5,
    	borderColor: '#909090',
    	borderWidth: 1.2,
    },
    nameMarks: {
    	flex: 30,
    },
    nameView: {
    	flex: 1000,
    	marginLeft: '5%',
    	marginTop: '6%',
    	marginRight: '3%',
    	marginBottom: '4%',
    },
    seriesView: {
    	flex: 1,
    	marginLeft: '5%',
    	marginBottom: '3%',
    	flexDirection: 'row'
    },
    finalView: {
    	flex: 1,
    	marginLeft: '5%',
    	marginBottom: '5%',
    },
    attendanceGrade: {
    	flex: 11,
    	marginTop: '5%',
    	marginBottom: '5%',
    },
    gradeView: {
    	flex: 1,
    	marginTop: '25%',
    	marginBottom: '-4%',
    	marginLeft: '-20%',
    	justifyContent: 'flex-end',
    },
    modalScreen: {
    	flex: 1,
    	flexDirection: 'row'
    },
    thirdbuffer: {
    	flex: 1,
    },
    modal: {
    	flex: 4,
    },
    fourthbuffer: {
    	flex: 4,
    },
    modalOptions: {
    	flex: 20,
    	borderTopLeftRadius: 5,
    	borderTopRightRadius: 5,
    	backgroundColor: '#101010'
    },
    option: {
    	flex: 2,
    	borderBottomWidth: 0.2,
    	borderColor: '#606060',
    	justifyContent: 'center'
    },
    modalClose: {
    	flex: 3,
    	borderBottomLeftRadius: 5,
    	borderBottomRightRadius: 5,
    	borderTopWidth: 0.7,
    	borderColor: '#C0C0C0',
    	backgroundColor: '#101010',
    	justifyContent: 'center'
    },
    courses: {
    	fontSize: height/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    semesterSelectText: {
    	fontSize: width/17,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-SemiBold',
    	textAlign: 'center',
    },
    name: {
    	fontSize: width/23,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    },
    seriesOne: {
    	fontSize: width/28,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    },
    seriesTwo: {
    	fontSize: width/28,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    },
    final: {
    	fontSize: width/26,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    },
    circleText: {
    	fontSize: width/24,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Regular',
    },
    grade: {
    	fontSize: width/24,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Medium',
    	textAlign: 'center'
    },
    optionText: {
    	fontSize: width/22,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    	textAlign: 'center'
    },
    modalCloseText: {
    	fontSize: width/20,
    	color: '#D0D0D0',
    	fontFamily: 'Montserrat-Medium',
    	textAlign: 'center'
    },
})