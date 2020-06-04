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
    	flex: 5,
    },
    classView: {
    	flex: 9,
    },
    classSelect: {
    	flex: 1,
    	width: '80%',
    	justifyContent: 'center',
    	borderRadius: 5,
    	marginLeft: '5%',
    	backgroundColor: '#202030',
    	elevation: 2,
    },
    notificationsContainer: {
    	flex: 93,
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
    footer: {
        flex: 18,
        backgroundColor: '#202035',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center'
    },
    addButton: {
        width: '40%',
        height: '65%',
        backgroundColor: '#E56967',
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    modalScreen_add: {
        flex: 1,
    },
    secondbufferone: {
        flex: 1,
    },
    modal_add: {
        flex: 5,
        borderRadius: 10,
        backgroundColor: '#101010'
    },
    modalHeadView_add: {
    	flex: 10,
    	marginLeft: '4%',
        marginTop: '2%',
    	marginRight: '5%',
    	justifyContent: 'flex-end'
    },
    modalDescriptionView_add: {
    	flex: 54,
    	marginLeft: '6%',
    	marginRight: '6%',
    },
    modalClose_add: {
    	flex: 10,
    	flexDirection: 'row',
    	borderBottomLeftRadius: 5,
    	borderBottomRightRadius: 5,
    	borderTopWidth: 0.7,
    	borderColor: '#C0C0C0',
    	backgroundColor: '#101010',
    	justifyContent: 'center'
    },
    saveView_add: {
        flex: 1,
        justifyContent: 'center',
        borderRightWidth: 0.2,
        borderColor: '#C0C0C0'
    },
    closeView_add: {
        flex: 1,
        justifyContent: 'center',
    },
    secondbuffertwo:{
        flex: 1,
    },
    modalScreen: {
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
    modalScreen_class: {
    	flex: 1,
    	flexDirection: 'row'
    },
    fourthbuffer: {
    	flex: 1,
    },
    modal_class: {
    	flex: 4,
    },
    fifthbuffer: {
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
    	marginTop: '7.1%',
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
    notifications: {
    	fontSize: height/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    classSelectText: {
    	fontSize: width/24,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Medium',
    	marginLeft: '5%',
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
    add: {
        fontSize: height/30,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
    modalHead_add: {
    	fontSize: height/30,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
        borderBottomWidth: 1,
        borderColor: '#909090'
    },
    modalDescription_add: {
    	fontSize: height/50,
    	color: '#D0D0D0',
    	fontFamily: 'Montserrat-Medium',
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
    optionText: {
    	fontSize: width/24,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    	textAlign: 'center'
    },
})