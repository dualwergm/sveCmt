import {StyleSheet} from 'react-native';

//obj: {t: Text, i: Image} 
//style: {n: Normal, i: italic} 
//size: {1: 14, 2: 16, 3: 18}
//obj - style - size
const ds = StyleSheet.create({
    ti1: {
        fontStyle: 'italic',
        fontSize: 14
    },
    tn1: {
        fontSize: 14
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    pbtn: { //primary - btn
        width: 200,
        height: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: '#04B5EB'
    },
    btn2s: { //btn secundary small
        width: 90,
        height: 26,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: '#ffffff',
        borderColor: '#04B5EB',
        borderWidth: 1
    },
    bold: {
        fontWeight: 'bold',
    },
    ptxtbtn: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
    txtbtn2s: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#04B5EB'
    },
    mb2: {
        marginBottom: 20
    },
    mb3: {
        marginBottom: 30
    },
    mv1: {
        marginVertical: 10
    },
    mv3: {
        marginVertical: 30
    },
    tn2: {
        fontSize: 16
    },
    tn3b: {
        fontWeight: 'bold',
        fontSize: 18
    },
    tn3: {
        fontSize: 18
    },
    tn6: {
        fontSize: 24
    },
    mr1:{
        marginRight: 10
    },
    mh1:{
        marginHorizontal: 10
    },
    mt2: {
        marginTop: 20
    },
    tc1: {
        color: '#5c5c5c'
    }
});

export default ds;