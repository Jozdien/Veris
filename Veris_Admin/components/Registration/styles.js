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
    },
    firstbufferone: {
    	flex: 2,
    },
    body: {
    	flex: 98,
    	justifyContent: 'center',
    },
    field: {
    	flex: 1,
    	width: '80%',
    	paddingTop: '7%',
    	alignSelf: 'center',
    	borderBottomWidth: 0.8,
    	borderColor: '#A0A0C0',
    	fontSize: width/28,
    	fontFamily: 'Montserrat-Regular',
    	color: '#C0C0C0'
    },
    firstbuffertwo: {
    	flex: 12,
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
    headerText: {
    	fontSize: width/12,
    	fontFamily: 'Montserrat-Bold',
    	color: '#F0F0F0',
    	paddingLeft: '5%',
    	paddingTop: '6%',
    },
    footerText: {
        fontSize: height/35,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
})