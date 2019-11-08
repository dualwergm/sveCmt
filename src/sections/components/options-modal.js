import React from 'react';
import {View, StyleSheet, Modal, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function OptionsModal(props){
    return (
        <View style={styles.cmodal}>
            <Modal
                style={{flex: 1}}
                animationType='fade'
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={props.toggleModal}
            >
                <View style={[styles.cmodal, { backgroundColor: 'rgba(0, 0, 0, 0.8)'}]}>
                    <TouchableOpacity style={styles.cclose}
                        onPress={props.toggleModal}
                        hitSlop={{ left: 5, top:5, bottom:5, right: 5 }}
                    >
                        <Ionicons name="md-close" size={38} color="#ffffff" />
                    </TouchableOpacity>
                    <BackModal modalScreen={props.modalScreen} goBack={props.goBack}/>

                    {props.children}
                </View>
            </Modal>
        </View>
    );
}

function BackModal(props){
    if(props.modalScreen === 2 || props.modalScreen === 3){
        return (
            <TouchableOpacity style={styles.cback}
                onPress={props.goBack}
                hitSlop={{ left: 5, top:5, bottom:5, right: 5 }}
            >
                <Ionicons name="md-arrow-back" size={32} color="#ffffff" />
            </TouchableOpacity>
        );
    }else{
        return (
            <View />
        );
    }
}

const styles = StyleSheet.create({
    cmodal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        position: 'relative'
    },
    cclose: {
        right: 25,
        top: 25,
        position: 'absolute'
    },
    cback: {
        left: 25,
        top: 20,
        position: 'absolute'
    }
});

export default OptionsModal;