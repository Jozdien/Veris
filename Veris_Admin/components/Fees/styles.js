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
    firstbuffer: {
        flex: 3,
    },
    feesContainer: {
    	flex: 107,
    },
    feesSelectedView: {
        flex: 1,
        width: '90%',
        borderWidth: 1,
        borderColor: '#E56967',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: '5%'
    },
    feesView: {
    	flex: 1,
        width: '90%',
        borderWidth: 1,
        borderColor: '#A0A0A0',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: '5%'
    },
    topView: {
        flex: 5,
    	marginLeft: '6%',
    	marginRight: '6%',
    },
    titleView: {
        flex: 1,
        marginTop: '5%',
    },
    dateView: {
        flex: 1,
        marginBottom: '3%',
    },
    amountView: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: '6%',
        marginBottom: '5%',
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
    modalScreen_add: {
    	flex: 1,
    	flexDirection: 'row'
    },
    secondbufferone: {
    	flex: 1,
    },
    modal_add: {
    	flex: 8,
    	height: '75%',
    	alignSelf: 'center',
    	borderRadius: 5,
    	backgroundColor: '#101010',
    },
    modal_Header: {
    	flex: 1,
    	width: '90%',
    	alignSelf: 'center',
    	justifyContent: 'center'
    },
    modal_Headertext: {
    	fontSize: width/18,
    	fontFamily: 'Montserrat-SemiBold',
    	borderBottomWidth: 1,
        borderColor: '#909090'
    },
    modal_Date: {
    	flex: 1,
    	flexDirection: 'row',
    	alignItems: 'center',
    	alignSelf: 'center'
    },
    datePicker: {
    	marginLeft: '5%',
    	width: '50%',
    },
    dateInput: {
    	borderColor: '#202030',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    },
    modal_Amounts: {
    	flex: 3,
    	marginBottom: '5%',
    	alignSelf: 'center',
    	justifyContent: 'center'
    },
    modal_categoryOne: {
    	flex: 1,
    	flexDirection: 'row',
    	alignItems: 'center',
    	marginLeft: '5%',
    },
    modal_Onetext: {
    	width: '30%',
    	marginLeft: '19%',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    	fontSize: width/25,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0',
    	textAlign: 'center'
    },
    modal_categoryTwo: {
    	flex: 1,
    	flexDirection: 'row',
    	alignItems: 'center',
    	marginLeft: '5%',
    },
    modal_Twotext: {
    	width: '30%',
    	marginLeft: '19.5%',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    	fontSize: width/25,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0',
    	textAlign: 'center'
    },
    modal_categoryThree: {
    	flex: 1,
    	flexDirection: 'row',
    	alignItems: 'center',
    	marginLeft: '5%',
    },
    modal_Threetext: {
    	width: '30%',
    	marginLeft: '14%',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    	fontSize: width/25,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0',
    	textAlign: 'center'
    },
    modal_Footer: {
    	flex: 1,
    	flexDirection: 'row',
    	borderTopWidth: 0.5,
    	borderColor: '#C0C0C0'
    },
    modal_save: {
    	flex: 1,
    	borderRightWidth: 0.5,
    	borderColor: '#C0C0C0',
    	justifyContent: 'center'
    },
    modal_close: {
    	flex: 1,
    	justifyContent: 'center'
    },
    secondbuffertwo: {
    	flex: 1,
    },
    fees: {
    	fontSize: height/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Bold',
    },
    due: {
        fontSize: height/32,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-Regular'
    },
    title: {
    	fontSize: height/38,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Medium',
    },
    date: {
    	fontSize: height/50,
        color: '#D0D0D0',
        fontFamily: 'Montserrat-Light'
    },
    amount: {
    	fontSize: height/40,
        color: '#D0D0D0',
        fontFamily: 'Montserrat-Regular',
    },
    footerText: {
        fontSize: height/35,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
    modal_Datetext: {
    	fontSize: width/24,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Medium'
    },
    datePickerText: {
    	fontSize: width/28,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular'
    },
    modal_categoryText: {
    	fontSize: width/26,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Medium'
    },
    save: {
    	fontSize: width/20,
    	color: '#D0D0D0',
    	fontFamily: 'Montserrat-SemiBold',
    	textAlign: 'center'
    },
    close: {
    	fontSize: width/20,
    	color: '#D0D0D0',
    	fontFamily: 'Montserrat-SemiBold',
    	textAlign: 'center'
    },
})