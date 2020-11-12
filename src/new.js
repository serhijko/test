import React, { Component } from 'react';

export default class NewComponent extends Component {

    constructor(props) {
        super(props);

        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return (
            <div style={{backgroundColor: 'red'}}>
                <h3>New component</h3>
                <p>{ this.props.text }</p>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

}
