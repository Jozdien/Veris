import { StyleSheet, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const height = dimensions.height;
const width = dimensions.width;

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    firstbuffer: {
    	flex: 1,
    },
    header: {
    	flex: 10,
    	flexDirection: 'row'
    },
    pictureOuterView: {
    	flex: 2,
    },
    secondbuffer: {
    	flex: 1,
    },
    pictureInnerView: {
    	flex: 4,
    	flexDirection: 'row',
    	justifyContent: 'center'
    },
    thirdbuffer: {
    	flex: 1,
    },
    picture: {
    	flex: 4,
    	alignSelf: 'center',
    	borderRadius: 5,
    	aspectRatio: 1,
    },
    details: {
    	flex: 5,
    },
    fourthbufferone: {
    	flex: 10,
    },
    nameView: {
    	flex: 20,
    	justifyContent: 'center',
    },
    idView: {
    	flex: 15,
    	justifyContent: 'center',
    },
    fourthbuffertwo: {
    	flex: 5,
    },
    classes: {
    	flex: 5,
    },
    coursesView: {
    	flex: 5,
    	marginLeft: '5%',
    	justifyContent: 'center'
    },
    fifthbuffer: {
    	flex: 1,
    },
    courseContainer: {
    	flex: 44,
    },
    courseView: {
    	flex: 1,
    	width: '88%',
    	alignSelf: 'center',
    	flexDirection: 'row',
    	marginBottom: '5%'
    },
    courseCodeView: {
    	flex: 1,
    },
    courseNameView: {
    	flex: 4,
    },
    name: {
    	fontSize: width/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    },
    id: {
    	fontSize: width/31,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    },
    courses: {
    	fontSize: width/16,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Medium',
    },
    courseCode: {
    	fontSize: width/25,
    	color: '#E0E0E0',
    	fontFamily: 'Montserrat-Regular',
    },
    courseName: {
    	fontSize: width/26,
    	color: '#E0E0E0',
    	fontFamily: 'Montserrat-Regular',
    },
})