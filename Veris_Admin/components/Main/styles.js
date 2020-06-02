import { StyleSheet, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const height = dimensions.height;
const width = dimensions.width;
const fontsize = height/35.5;
// #E56967

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    firstbufferone: {
    	flex: 24,
    },
    portalOuterView:{
    	flex: 28,
    	flexDirection: 'row',
    },
    secondbuffer: {
    	flex: 53,
    },
    portalInnerView: {
    	flex: 60,
    },
    portalShadow: {
    	flex: 4,
    	borderRadius: 100,
    	backgroundColor: '#E56967',
    	shadowColor: '#090909',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: { width: 4, height: 4 },
    },
    portalButton: {
    	flex: 1,
    	height: '100%',
    	width: '100%',
    	borderRadius: 100,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    portalTextView: {
    	flex: 1,
    	justifyContent: 'flex-end'
    },
    firstbuffertwo: {
    	flex: 9,
    },
    ENOuterView: {
    	flex: 21,
    	flexDirection: 'row',
    },
    thirdbuffer: {
    	flex: 6,
    },
    eventsView: {
    	flex: 10,
    },
    eventsShadow: {
    	flex: 3,
    	borderRadius: 100,
    	backgroundColor: '#E56967',
    	shadowColor: '#090909',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: { width: 4, height: 4 },
    },
    eventsButton: {
    	flex: 1,
    	height: '100%',
    	width: '100%',
    	borderRadius: 100,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    eventsTextView: {
    	flex: 1,
    	justifyContent: 'flex-end'
    },
    fourthbuffer: {
    	flex: 7,
    },
    newsView: {
    	flex: 10,
    },
    newsShadow: {
    	flex: 3,
    	borderRadius: 100,
    	backgroundColor: '#E56967',
    	shadowColor: '#090909',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: { width: 4, height: 4 },
    },
    newsButton: {
    	flex: 1,
    	height: '100%',
    	width: '100%',
    	borderRadius: 100,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    newsTextView: {
    	flex: 1,
    	justifyContent: 'flex-end'
    },
    firstbufferthree: {
    	flex: 22,
    },

    portalText: {
    	fontSize: fontsize,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    	textAlign: 'center'
    },
    eventsText: {
    	fontSize: fontsize,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    	textAlign: 'center'
    },
    newsText: {
    	fontSize: fontsize,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    	textAlign: 'center'
    },
})