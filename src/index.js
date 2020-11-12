import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {

    static propTypes = {
        btnText: PropTypes.string.isRequired,
        h1text: PropTypes.string.isRequired,
        newArray: PropTypes.number.isRequired
    };

    static defaultProps = {
        btnText: 'default props text'
    }

    btnOnClick(event) {
        console.log('Button clicked!', event.target);
    }

    render() {
        console.log('array', this.props.newArray);
        return (
            <div className="test">
                <h1>{ this.props.h1text }</h1>
                <h3>It's really working!</h3>
                <button onClick={this.btnOnClick}>{ this.props.btnText }</button>
            </div>
        );
    }

}

ReactDOM.render(
    <App h1text="This is h1 text" newArray={[1, 2, 3]} />,
    document.getElementById('app')
);
