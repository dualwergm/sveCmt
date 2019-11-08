import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {iconsState, iconsSource} from '../../utils/icons-path';
import ds from '../../utils/d-theme';
import Btn2S from '../../sections/components/2btn-s';

function CmtCard(props){
    return (
        <TouchableOpacity style={[styles.card, {backgroundColor: props.highlighters ? props.highlighters.color : '#ffffff'}]} onPress={props.onPress}>
            <View style={styles.bodycard}>
                <View style={styles.ctitle}>
                    <SourceImg source={props.source} />
                    <View style={{flex: 10}}><Text style={[ds.tn2, ds.bold, ds.tc1]} >{props.name}</Text></View>
                    <View style={{flex: 1}}><Image source={iconsState[props.state]} style={[styles.icon]} /></View>
                </View>
                <View style={styles.cdescription}>
                    <Text style={ds.tc1}>{props.description}</Text>
                </View>
            </View>
            <ActionsBtns forapprove={props.forapprove}/>
        </TouchableOpacity>
    );
}

function SourceImg(props){
    if(props.source > 0){
        return (
            <View style={{flex: 1}}><Image source={iconsSource[props.source]} style={styles.icon} /></View>
        );
    }else{
        return (
            <View />
        );
    }
}

function ActionsBtns(props){
    let btns;
    if(props.forapprove === 3){
        btns = (
            <View style={styles.actions}>
                <Btn2S text={'Aprobar'} />
                <View style={{marginLeft: 7}}>
                    <Btn2S text={'Rechazar'} />
                </View>
                <View style={{marginLeft: 7}}>
                    <Btn2S text={'Cancelar'} />    
                </View>
            </View>
        );
    }
    if(props.forapprove === 2){
        btns = (
            <View style={styles.actions}>
                <Btn2S text={'Enviar'} />
                <View style={{marginLeft: 7}}>
                    <Btn2S text={'Cancelar'} />    
                </View>
            </View>
        );
    }
    if(props.forapprove === 1){
        btns = (
            <View style={styles.actions}>
                <View style={{marginLeft: 7}}>
                    <Btn2S text={'Cancelar'} />    
                </View>
            </View>
        );
    }
    if(props.forapprove === 0){
        btns = (
            <View />
        );
    }
    return (btns);
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 15,
        marginHorizontal: 15,
        borderRadius: 7,
        alignContent: 'stretch',
        shadowColor: "#505050",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 0.7,
        elevation: 2,
    },
    bodycard: {
        paddingTop: 15,
        paddingBottom: 10
    },
    ctitle: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'stretch',
        paddingHorizontal: 5
    },
    cdescription: {
        paddingHorizontal: 10
    },
    actions: {
        flex: 1,
        marginVertical: 10,
        paddingTop: 10,
        paddingRight: 10,
        borderTopWidth: 1,
        borderTopColor: '#e1e1e1',
        flexDirection: 'row',
        justifyContent: "flex-end"
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
})

export default CmtCard;