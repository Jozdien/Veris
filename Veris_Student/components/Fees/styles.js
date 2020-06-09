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
    feesTextView: {
    	flex: 1,
    	justifyContent: 'center',
    	marginLeft: '5%'
    },
    dueView: {
        flex: 5,
        marginLeft: '8%',
        justifyContent: 'center',
    },
    firstbuffer: {
        flex: 6,
    },
    feesContainer: {
    	flex: 99,
    },
    feesSelectedView: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        borderWidth: 1,
        borderColor: '#E56967',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: '5%'
    },
    feesView: {
    	flex: 1,
        flexDirection: 'row',
        width: '90%',
        borderWidth: 1,
        borderColor: '#A0A0A0',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: '5%'
    },
    leftView: {
        flex: 5,
    	marginLeft: '6%',
    	marginRight: '6%',
    },
    titleView: {
        flex: 1,
        marginTop: '10%',
    },
    dateView: {
        flex: 1,
        marginBottom: '10%',
    },
    amountView: {
        flex: 1,
        justifyContent: 'center',
        marginRight: '5%'
    },
    footer: {
        flex: 18,
        backgroundColor: '#202035',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center'
    },
    payButton: {
        width: '40%',
        height: '65%',
        backgroundColor: '#E56967',
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    fees: {
    	fontSize: width*1.66111111111/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    due: {
        fontSize: width*1.66111111111/32,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-Regular'
    },
    title: {
    	fontSize: width*1.66111111111/40,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Medium',
    },
    date: {
    	fontSize: width*1.66111111111/50,
        color: '#D0D0D0',
        fontFamily: 'Montserrat-Light'
    },
    amount: {
    	fontSize: width*1.66111111111/40,
        color: '#D0D0D0',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'right'
    },
    pay: {
        fontSize: width*1.66111111111/35,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
})
