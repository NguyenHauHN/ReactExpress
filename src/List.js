import React, {Component} from 'react';

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    item: {
        backgroundColor: 'whitesmoke',
        padding: 15,
        marginBottom: 5
    }
};


export default class List extends Component {
    renderItem = (text, i) => {
        const {onClickItem} = this.props;

        return (
            <div style={style.item} onClick={() => onClickItem(i)} key={i}>
                {text}
            </div>
        )
    }

    render() {
        const {list} = this.props;

        return(
            <div style={style.container}>
                {list.map(this.renderItem)}
            </div>
        )

    }
}