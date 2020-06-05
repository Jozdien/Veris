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
    	flexDirection: 'row',
    },
    headerTextView: {
    	flex: 10,
    	marginLeft: '5%',
    	justifyContent: 'center'
    },
    examSelectView: {
    	flex: 6,
    	justifyContent: 'center',
    },
    examSelect: {
    	width: '80%',
    	height: '50%',
    	borderRadius: 5,
    	alignSelf: 'center',
    	justifyContent: 'center',
    	backgroundColor: '#202030',
    	elevation: 2,
    },
    class: {
    	flex: 12,
    	justifyContent: 'flex-start'
    },
    classView: {
    	height: '80%',
    	width: '91%',
    	marginLeft: '5%',
    	paddingLeft: '3%',
    	borderRadius: 5,
    	backgroundColor: '#202030',
    	elevation: 2,
    },
    classSelect: {
    	flex: 1,
    	justifyContent: 'center',
    },
    fifthbuffer: {
    	flex: 4,
    },
    body: {
    	flex: 90,
    	marginLeft: '5%',
    },
    box: {
    	width: '12%',
    	marginRight: '8.5%',
    	marginBottom: '7%',
    },
    boxMarked: {
    	flex: 1,
    	borderRadius: 5,
    	paddingTop: '24%',
    	paddingBottom: '24%',
    	justifyContent: 'center',
    	backgroundColor: '#E56967',
    	elevation: 6,
    },
    boxUnMarked: {
    	flex: 1,
    	borderRadius: 5,
    	paddingTop: '24%',
    	paddingBottom: '24%',
    	justifyContent: 'center',
    	backgroundColor: '#202030',
    	elevation: 3,
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
    modalScreen_class: {
    	flex: 1,
    	flexDirection: 'row'
    },
    firstbuffer: {
    	flex: 1,
    },
    modal_class: {
    	flex: 4,
    },
    secondbuffer: {
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
    	paddingTop: '7.1%',
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
    modalScreen_exam: {
    	flex: 1,
    	flexDirection: 'row',
    },
    thirdbuffer: {
    	flex: 1,
    },
    modal_exam: {
    	flex: 5,
    },
    fourthbuffer: {
    	flex: 9.55,
    },
    modalExams: {
    	flex: 8.7,
    	borderTopLeftRadius: 5,
    	borderTopRightRadius: 5,
    	backgroundColor: '#101010'
    },
    exam: {
    	flex: 2,
    	paddingTop: '7.1%',
    	paddingBottom: '7.1%',
    	borderBottomWidth: 0.2,
    	borderColor: '#606060',
    	justifyContent: 'center'
    },
    modalClose_exam: {
    	flex: 3,
    	borderBottomLeftRadius: 5,
    	borderBottomRightRadius: 5,
    	borderTopWidth: 0.7,
    	borderColor: '#C0C0C0',
    	backgroundColor: '#101010',
    	justifyContent: 'center'
    },
    modalScreen_marks: {
    	flex: 1,
    	flexDirection: 'row',
    },
  	sixthbuffer: {
  		flex: 1,
  	},
  	modal_marks: {
  		flex: 5,
  	},	
  	seventhbuffer: {
  		flex: 9,
  	},
  	modalMarks: {
  		flex: 9,
    	borderTopLeftRadius: 5,
    	borderTopRightRadius: 5,
    	backgroundColor: '#101010'
  	},
  	modalHeader: {
  		flex: 2,
  		marginLeft: '5%',
  		justifyContent: 'center'
  	},
  	modalEnteringMarks: {
  		flex: 3,
  		alignItems: 'center',
  		flexDirection: 'row',
  	},
  	eighthbuffer: {
  		flex: 4,
  	},
  	modalEnteringMarksTextView: {
  		flex: 10,
  	},
  	modalStudentMarks: {
  		flex: 7,
  	},
  	modalHead_add: {
  		borderRadius: 5,
    	backgroundColor: '#202030',
    	color: '#D0D0D0',
    	fontSize: width/25,
    	fontFamily: 'Montserrat-Medium',
    	textAlign: 'center'
    },
  	modalOutOf: {
  		flex: 5,
  	},
  	modalMaxMarks: {
  		flex: 7,
  	},
  	modalOK_marks: {
  		flex: 3,
    	borderBottomLeftRadius: 5,
    	borderBottomRightRadius: 5,
    	borderTopWidth: 0.7,
    	borderColor: '#C0C0C0',
    	backgroundColor: '#101010',
    	justifyContent: 'center'
  	},
    headerText: {
    	fontSize: height/20,
    	fontFamily: 'Montserrat-Bold',
    	color: '#F0F0F0',
    },
    examSelectText: {
    	fontSize: width/28,
    	fontFamily: 'Montserrat-Medium',
    	color: '#F0F0F0',
    	textAlign: 'center'
    },
    classText: {
    	fontSize: width/28,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0'
    },
    boxText: {
    	fontSize: width/26,
    	fontFamily: 'Montserrat-SemiBold',
    	color: '#F0F0F0',
    	textAlign: 'center'
    },
    footerText: {
    	fontSize: height/30,
        color: '#F0F0F0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
    optionText: {
    	fontSize: width/24,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    	textAlign: 'center'
    },
    close: {
    	fontSize: height/36,
        color: '#E0E0E0',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center'
    },
    modalName: {
    	fontSize: height/32,
        color: '#E0E0E0',
        fontFamily: 'Montserrat-SemiBold',
    },
    modalID: {
    	fontSize: width/30,
    	color: '#C0C0C0',
    	fontFamily: 'Montserrat-Regular',
    },
    modalEnteringMarksText: {
    	fontSize: width/24,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Medium',
    },
    outOf: {
    	fontSize: width/20,
    	color: '#F0F0F0',
    	fontFamily: 'Montserrat-Medium',
    	textAlign: 'center'
    },
})