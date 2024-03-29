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
    },
    eventsTextView: {
    	flex: 1,
    	justifyContent: 'center',
    	marginLeft: '5%'
    },
    firstbuffer: {
    	flex: 3,
    },
    eventsContainer: {
    	flex: 125,
    	marginLeft: '5%'
    },
    eventsView: {
    	width: '46%',
    	backgroundColor: '#202030',
    	borderRadius: 5,
    	marginBottom: '5%',
    	marginRight: '4%'
    },
    titleView: {
    	marginLeft: '6%',
    	marginTop: '7%',
    	marginRight: '6%',
    },
    descriptionView: {
    	margin: '6%',
    	marginTop: '2%'
    },
    dateView: {
    	margin: '6%',
    },
    modalScreen: {
    	flex: 1,
    },
    secondbufferone: {
    	flex: 1,
    },
    modal: {
    	flex: 5,
    	borderRadius: 10,
    	backgroundColor: '#101010'
    },
    modalHeadView: {
    	flex: 9,
    	marginLeft: '5%',
    	marginRight: '5%',
    	justifyContent: 'flex-end'
    },
    modalDateView: {
    	flex: 5,
    	marginLeft: '5%',
    	marginRight: '5%',
    	justifyContent: 'center'
    },
    modalDescriptionView: {
    	flex: 50,
    	marginLeft: '6%',
    	marginRight: '6%',
    	marginTop: '4%'
    },
    closeView: {
    	flex: 10,
    	justifyContent: 'center',
    	borderTopWidth: 0.2,
    	borderColor: '#C0C0C0'
    },
    secondbuffertwo:{
    	flex: 1,
    },
    events: {
    	fontSize: width/12.0401337793,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    title: {
    	fontSize: width/24.0802675585,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    },
    description: {
    	fontSize: width/33.110367893,
    	color: '#E0E0E0',
    	fontFamily: 'Montserrat-Regular',
    },
    date: {
    	fontSize: width/31.3043478261,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Medium',
    },
    modalHead: {
    	fontSize: width/18.0602006689,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    },
    modalDate: {
    	fontSize: width/33.110367893,
    	color: '#B0B0B0',
    	fontFamily: 'Montserrat-Regular',
    },
    modalDescription:{
    	fontSize: width/30.1003344482,
    	color: '#D0D0D0',
    	fontFamily: 'Montserrat-Medium',
    },
    close: {
    	fontSize: width/21.6722408027,
    	color: '#E0E0E0',
    	fontFamily: 'Montserrat-SemiBold',
    	textAlign: 'center'
    },
})
