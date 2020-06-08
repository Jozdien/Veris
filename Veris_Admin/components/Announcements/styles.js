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
    newsTextView: {
    	flex: 1,
    	justifyContent: 'center',
    	marginLeft: '5%'
    },
    firstbuffer: {
    	flex: 3,
    },
    newsContainer: {
    	flex: 107,
    },
    newsView: {
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
    news: {
    	fontSize: width/12.0401337793,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    title: {
    	fontSize: width/22.8762541806,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    },
    description: {
    	fontSize: width/28.8963210703,
    	color: '#E0E0E0',
    	fontFamily: 'Montserrat-Regular',
    },
    add: {
        fontSize: width/18.0602006689,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
    modalHead_add: {
    	fontSize: width/18.0602006689,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
        borderBottomWidth: 1,
        borderColor: '#909090'
    },
    modalDescription_add: {
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
