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
    notificationsTextView: {
    	flex: 1,
    	justifyContent: 'center',
    	marginLeft: '5%'
    },
    firstbuffer: {
    	flex: 3,
    },
    notificationsContainer: {
    	flex: 125,
    },
    notificationsView: {
    	flex: 1,
    	width: '90%',
    	borderWidth: 1,
    	borderColor: '#A0A0A0',
    	borderRadius: 5,
    	alignSelf: 'center',
    	marginBottom: '5%'
    },
    titleView: {
    	marginLeft: '4%',
    	marginTop: '4%',
    	marginRight: '4%',
    },
    descriptionView: {
    	margin: '4%',
    	marginTop: '5%'
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
    thirdbuffer: {
        flex: 0.8,
    },
    scrollContainer: {
        flex: 11.8
    },
    modalHeadView: {
        flex: 1.8,
        marginLeft: '5%',
        marginRight: '5%',
        justifyContent: 'flex-start'
    },
    modalDescriptionView: {
        flex: 10,
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '6%'
    },
    closeView: {
        flex: 2,
        justifyContent: 'center',
        borderTopWidth: 0.2,
        borderColor: '#C0C0C0'
    },
    secondbuffertwo:{
        flex: 1,
    },
    notifications: {
    	fontSize: height/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    title: {
    	fontSize: height/38,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    },
    description: {
    	fontSize: height/48,
    	color: '#E0E0E0',
    	fontFamily: 'Montserrat-Regular',
    },
    modalHead: {
        fontSize: height/30,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
    },
    modalDescription:{
        fontSize: height/50,
        color: '#D0D0D0',
        fontFamily: 'Montserrat-Medium',
    },
    close: {
        fontSize: height/36,
        color: '#E0E0E0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
})