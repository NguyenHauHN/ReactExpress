import React, {Component} from 'react';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state = {value: ""};
    }

    handleChange = e => {
        this.setState({value: e.target.value});
    }

    handleKeypress = e => {
        if(e.key !== "Enter") return;

        const {onSubmmitEditing} = this.props;
        const {value} = this.state;

        if(!value) return;
        onSubmmitEditing(value);

        this.setState({value: ""});

    }


    render(){
        const {value} = this.state;
        const {placeholder} = this.props;

        return(
            <input
                style={style.input}
                type={"text"}
                placeholder={placeholder}
                value={value}
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
}