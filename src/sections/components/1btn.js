import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ds from '../../utils/d-theme';

function Btn1 (props){
    return (
        <TouchableOpacity style={[ds.pbtn, ds.mb3]}
            onPress={props.onPress}
        >
            <Text style={ds.ptxtbtn} >{props.text}</Text>
        </TouchableOpacity>
    );
}

export default Btn1;