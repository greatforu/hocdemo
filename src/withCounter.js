import React from 'react';
import ClickCounter from './ClickCounter';

const withCounter = (WrappedComponent) => {
    class withCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        handleChange = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        render() {
            const { count, handleChange } = this.props
            return (
                <div>
                    <WrappedComponent />
                    <button onClick={handleChange}>
                        <ClickCounter />
                    </button>
                    <h1>Button clicked {count} times</h1>
                </div>
            )
        }
    }
    return withCounter
}


export default withCounter;