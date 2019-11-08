import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import ds from '../../utils/d-theme';

function Btn2S(props){
    return (
        <TouchableOpacity
            style={ds.btn2s}
        >
            <Text style={ds.txtbtn2s} >{props.text}</Text>
        </TouchableOpacity>
    );
}

export default Btn2S;