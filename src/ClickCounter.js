import React from 'react'
import WrappedComponent from './withCounter';
class ClickCounter extends React.Component {

    render() {
        return (
        <div>
            <h1>Hello world</h1>
            console.log("hi");
            
        </div>
        )
    }
}

export default WrappedComponent(ClickCounter)