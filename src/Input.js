import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleKeypress = (e) => {
        if (e.key !== "Enter") return;
        const {onSubmitEditing} = this.props;

        const {value} = this.state;
        if (!value) return;
        onSubmitEditing(value);
        this.setState({value: ""});
    }

    render() {
        const {placeholder} = this.props;
        const {value} = this.state;

        return (
            <input
                type={'text'}
                value={value}
                placeholder={placeholder}
                style={style.input}
                onChange={this.handleChange}
                onKeyPress={this.handleKeypress}
            />
        )
    }
}

const style = {
    input: {
        fontSize: '100%',
        padding: 15,
        borderWidth: 0
    }
};