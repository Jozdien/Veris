import { StyleSheet, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const height = dimensions.height;
const width = dimensions.width;

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    firstbufferone: {
    	flex: 25,
    },
    verisView: {
    	flex: 15,
    	justifyContent: 'center'
    },
    fieldsView: {
    	flex: 20,
    	justifyContent: 'center',
    	marginLeft: '10%',
    	marginRight: '10%',
    },
    emailView: {
    	flex: 1,
    	backgroundColor: '#F0F0F0',
    	borderTopLeftRadius: 5,
    	borderTopRightRadius: 5,
    	borderBottomWidth: 0.13,
    	justifyContent: 'center',
    	paddingLeft: '3%'
    },
    passwordView: {
    	flex: 1,
    	backgroundColor: '#F0F0F0',
    	borderBottomLeftRadius: 5,
    	borderBottomRightRadius: 5,
    	justifyContent: 'center',
    	paddingLeft: '3%'
    },
    firstbuffertwo: {
    	flex: 2,
    },
    loginView: {
    	flex: 10,
    	marginLeft: '10%',
    	marginRight: '10%',
    },
    loginInnerView: {
    	flex: 1,
    	justifyContent: 'center',
    	borderWidth: 1.5,
    	borderRadius: 5,
    	borderColor: '#E56967'
    },
    forgotView: {
    	flex: 10,
    	marginLeft: '25%',
    	marginRight: '25%',
    },
    forgotInnerView: {
    	flex: 1,
    	justifyContent: 'center',
    },
    firstbufferthree: {
    	flex: 35,
    },
    veris: {
    	fontSize: width*1.66111111111/20,
    	fontFamily: 'Montserrat-Light',
    	color: '#E56967',
    	textAlign: 'center',
    },
    input: {
    	fontSize: width*1.66111111111/45,
    	fontFamily: 'Montserrat-Regular',
    	color: 'black',
    },
    login: {
    	fontSize: width*1.66111111111/33,
    	fontFamily: 'Montserrat-Medium',
    	color: '#F0F0F0',
    	textAlign: 'center',
    },
    forgot: {
    	fontSize: width*1.66111111111/45,
    	fontFamily: 'Montserrat-Light',
    	color: '#C0C0C0',
    	textAlign: 'center',
    },
})
