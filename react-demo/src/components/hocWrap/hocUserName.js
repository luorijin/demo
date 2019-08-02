import React, {Component} from 'react'

export default (WrappedComponent) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                username: ''
            }
        }

        componentWillMount() {
            let username = this.props.username;
            this.setState({
                username: username
            })
        }

        render() {
            return <WrappedComponent username={this.state.username}/>
        }
    }

    return NewComponent
}