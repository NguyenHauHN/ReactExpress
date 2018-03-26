import React, {Component} from 'react';

export default class List extends Component {
    renderItem = (text, i) => {
        const {onClickItem} = this.props;

        return (
            <div style={style.item} onClick={() => onClickItem(i)}>
                {text}
            </div>
        )
    }

    render(){
        const {list} = this.props;

        return(
            <div style={style.container}>
                {list.map(this.renderItem)}
            </div>
        )
    }
}

const style = {
    container:{
        display: 'flex',
        flexDirection: 'column'
    },
    item: {
        backgroundColor: 'whitesmoke',
        marginBottom: 5,
        padding: 15
    }
};