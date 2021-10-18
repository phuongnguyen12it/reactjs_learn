import React, { Component } from 'react'

export default class HandleEvent extends Component {

    // Xu li su kien khi nguoi dung click vao button
    handleClick = (name) => {
        alert('hello:' + name);
    }

    handleClickParam = (param) => {
        alert('param: '+ param);
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.handleClick('tao lao')}}>Click ME</button>
                <button onClick={this.handleClickParam.bind(this, 'yolo ')}>Click ME Param</button>
            </div>
        )
    }
}
