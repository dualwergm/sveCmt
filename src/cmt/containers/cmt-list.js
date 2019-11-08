import React, {Component} from 'react';
import data from '../../utils/data'
import { FlatList } from 'react-native-gesture-handler';
import {ToastAndroid} from 'react-native';
import CmtCard from '../components/cmt-card';
import CmtListLayout from '../components/cmt-list-layout';

class CmtList extends Component {
    state = {
        modalVisible: false,
        list: data.cmts,
        modalScreen: 1,
        selected: {}
    }
    toggleModal = () => {
        this.setState({
            modalVisible: false
        });
    }
    goBack = () => {
        this.setState({
            modalScreen: 1
        });
    }
    showModalOptions = (item) => {
        this.setState({
            selected: item,
            modalVisible: true,
            modalScreen: 1
        });
    };
    renderItem = ({item}) => {
        return (
            <CmtCard {...item} onPress={() => {this.showModalOptions(item)}} />
        );
    };

    exploreCmt = () => {
        ToastAndroid.show("A explorar", ToastAndroid.LONG);
    }
    toLabel = () => {
        this.setState({
            modalScreen: 2
        });
        ToastAndroid.show("A etiquetar", ToastAndroid.LONG);
    }
    toHighlighters = () => {
        this.setState({
            modalScreen: 3
        });
    }

    fnColorSelected = (colorId) => {
        let dataSelected = data.cmts.filter(itemCmt => itemCmt.id === this.state.selected.id)[0];
        if(colorId === 0){
            delete dataSelected["highlighters"];
        }else{
            const color = data.highlighters.filter(itemColor => itemColor.id === colorId)[0].bgcolor;
            dataSelected.highlighters = {id: colorId, color};
        }
        let newDataCmts = Array.from(data.cmts);
        this.setState({
            list: newDataCmts,
            modalVisible: false
        });
    };

    keyExtractor = item => `${item.id}`;
   
    render(){
        return (
            <CmtListLayout
                modalVisible={this.state.modalVisible}
                toggleModal={this.toggleModal}
                fnexplore={this.exploreCmt}
                fnlabel={this.toLabel}
                fnhighlighters={this.toHighlighters}
                modalScreen={this.state.modalScreen}
                goBack={this.goBack}
                fnColorSelected={this.fnColorSelected}
                highlighter={this.state.selected.highlighters}
            >
                 <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}
                />
            </CmtListLayout>
        );
    }
}

CmtList.navigationOptions = {
    header: null,
};

export default CmtList;