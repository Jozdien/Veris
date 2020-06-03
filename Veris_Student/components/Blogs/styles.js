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
    blogsTextView: {
    	flex: 1,
    	justifyContent: 'center',
    	marginLeft: '5%'
    },
    firstbuffer: {
    	flex: 3,
    },
    blogsContainer: {
    	flex: 107,
    	marginLeft: '5%'
    },
    blogsView: {
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
    blogHeadView: {
    	flex: 9,
    	marginLeft: '4%',
    	marginRight: '5%',
    	justifyContent: 'flex-end'
    },
    blogDetailsView: {
    	flex: 2,
    	marginLeft: '4%',
        marginTop: '2%',
        justifyContent: 'center'
    },
    blogDescriptionView: {
    	flex: 53,
    	marginLeft: '6%',
    	marginRight: '6%',
    	marginTop: '5%'
    },
    blogCloseView: {
    	flex: 10,
    	borderTopWidth: 0.2,
    	borderColor: '#C0C0C0',
    	justifyContent: 'center'
    },
    modalHeadView: {
    	flex: 9,
    	marginLeft: '4%',
        marginTop: '2%',
    	marginRight: '5%',
    	justifyContent: 'flex-end'
    },
    modalCategoryView: {
        flex: 7,
        marginLeft: '4.8%',
        marginTop: '2%',
        justifyContent: 'center'
    },
    modalDescriptionView: {
    	flex: 48,
    	marginLeft: '6%',
    	marginRight: '6%',
    },
    bottomView: {
    	flex: 10,
        flexDirection: 'row',
    	borderTopWidth: 0.2,
    	borderColor: '#C0C0C0'
    },
    saveView: {
        flex: 1,
        justifyContent: 'center',
        borderRightWidth: 0.2,
        borderColor: '#C0C0C0'
    },
    closeView: {
        flex: 1,
        justifyContent: 'center',
    },
    secondbuffertwo:{
    	flex: 1,
    },
    blogs: {
    	fontSize: height/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    title: {
    	fontSize: height/40,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    },
    description: {
    	fontSize: height/55,
    	color: '#E0E0E0',
    	fontFamily: 'Montserrat-Regular',
    },
    date: {
    	fontSize: height/52,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Medium',
    },
    add: {
        fontSize: height/30,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
    blogHead: {
    	fontSize: height/30,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
    },
    blogDetails: {
    	fontSize: height/53,
        color: '#B0B0B0',
        fontFamily: 'Montserrat-Regular',
    },
    blogDescription: {
    	fontSize: height/50,
    	color: '#D0D0D0',
    	fontFamily: 'Montserrat-Medium',
    },
    modalHead: {
    	fontSize: height/30,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-SemiBold',
        borderBottomWidth: 1,
        borderColor: '#909090'
    },
    modalCategory: {
        fontSize: height/53,
        color: '#B0B0B0',
        fontFamily: 'Montserrat-Regular',
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