import React, {Component} from 'react';

export default class Title extends Component {
    render() {
        const {children} = this.props;

        return (
            <div style={style.header}>
                <div style={style.title}>
                    {children}
                </div>
            </div>
        )
    }
}

const style = {
    header: {
        backgroundColor: 'skyblue',
        padding: 15
    },
    title: {
        textAlign: 'center',
        color: 'white'
    }
};