import React, { Component } from 'react'

export default class RenderingCondition extends Component {
    
    login = false;

    userName = 'PhuongNV'

    renderContent = () => {
        if (this.login) {
            return <p>Hello {this.userName}</p>
        }
        return <button>Login</button>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}
