import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, FlatList,ToastAndroid} from 'react-native';
import ds from '../../utils/d-theme';
import Btn1 from '../../sections/components/1btn';
import OptionsModal from '../../sections/components/options-modal';
import testData from '../../utils/data';
import { Ionicons } from '@expo/vector-icons';

function CmtListLayout(props){
    return(
        <View style={styles.container}>
            <GetContentModal {...props}/>
            {props.children}
        </View>
    );
}

function GetContentModal(props){
    console.log("screen ", props.modalScreen);
    if(props.modalScreen === 1){ //Buttons
        return (
            <OptionsModal {...props} >
                <View style={[ds.center, styles.cbtns]}>
                    <Btn1 onPress={props.fnexplore}
                        text={"Explorar"}
                    />
                    <Btn1 onPress={props.fnlabel}
                        text={"Etiquetar"}
                    />
                    <Btn1 onPress={props.fnhighlighters}
                        text={"Resaltar"}
                    />
                </View>
            </OptionsModal>
        );
    }
    if(props.modalScreen === 2){ //Labels
        return (
            <OptionsModal {...props} >
                <View style={[ds.center]}>
                    <View style={{marginVertical: 20}}>
                        <Text style={[ds.tn6, ds.bold, {color: '#ffffff'}]}>Etiquetas</Text>
                    </View>
                    <FlatList 
                        keyExtractor={label => `${label.id}`}
                        data={testData.labels}
                        renderItem={({item}) => {
                            return (<LabelCard {...item} onPress={() => {markLabelItem(item)}} />);
                        }}
                    />
                    <TouchableOpacity style={[ds.pbtn, {marginVertical: 20}]} >
                        <Text style={ds.ptxtbtn} >Guardar</Text>
                    </TouchableOpacity>
                </View>
            </OptionsModal>
        );
    }
    let items = testData.highlighters.map((j) => {
        let ochecked = (props.highlighter && props.highlighter.id === j.id) ? <Ionicons name="md-checkmark" size={32} color="#ffffff" /> : <View />;
        return (
            <TouchableOpacity key={j.id} style={[styles.rowcolor, {backgroundColor: j.color, alignItems: 'center', justifyContent: 'center'}]} 
                onPress={() => {props.fnColorSelected(j.id)}} >
                {ochecked}
            </TouchableOpacity>
        );
    });

    let oremoveColor;
    if(!props.highlighter){
        oremoveColor = <View/>;
    }else{
        oremoveColor = <TouchableOpacity key={0} style={[styles.rowcolor, {borderColor: '#ffffff', borderWidth: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}]} 
            onPress={() => {props.fnColorSelected(0)}} >
                <Text style={[ds.tn3, ds.bold, {color: '#ffffff'}]}>Dejar de resaltar</Text>
        </TouchableOpacity>;
    }

    return ( //highlighters
        <OptionsModal {...props} >
            <View style={ds.center}>
                <View style={{marginBottom: 30}}>
                    <Text style={[ds.tn6, ds.bold, {color: '#ffffff'}]}>Selecciona el color</Text>
                </View>
                {items}
                {oremoveColor}
            </View>
        </OptionsModal>
        
    );
}

function markLabelItem(item){
    console.log(item);
    ToastAndroid.show(item.name, ToastAndroid.LONG);
}

function LabelCard(props){
    return (
        <TouchableOpacity style={styles.lcontainer} onPress={props.onPress}>
            <Text style={[ds.bold, {color: '#04B5EB', fontStyle: 'italic', fontSize: 44}]}>#</Text>
            <View style={styles.lcard}>
                <Text style={[ds.tn3, ds.bold, {color: '#ffffff'}]}>{props.name}</Text>
            </View>
            <Ionicons name="md-checkmark-circle" size={32} color="#04B5EB" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    lcontainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row'
    },
    lcard: {
        width: 250,
        marginLeft: 5,
        justifyContent: 'center',
    },
    container: {
        flex: 1
    },
    rowcolor: {
        height: 50,
        width: 220,
        marginBottom: 30,
        borderRadius: 7
    }
});

export default CmtListLayout;