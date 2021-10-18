import React, { Component } from 'react'

export default class StateDemo extends Component {
    
    //thuoc tinh co san cua react, dinh nghi nhung noi dung co kha nang thay doi khi nguoi dung thao tac su kien
    state = {
        status: false
    }

    //setState phuong thuc co san cua component reactjs, giup thay doi gia tri state va render lai giao dien

    userLogin = {
        name: "phuongnv",
        age: 27
    }

    login = () => {
        // khong gan truc tiep phai dung ham set state
        // this.state.status = true;
        let newState = {
            status: true,
        }
        this.setState(newState, () =>{
            console.log(this.state);
        });
        //Goi phuong thuc set state update lai giao dien
    }

    renderUserLogin = () => {
        if (this.state.status) {
            return <div className="text-center">Xin chao {this.userLogin.name}- Tuoi: {this.userLogin.age}</div>
        }
        return <button onClick={() => {this.login()}}>Login</button>
    }

    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>
        )
    }
}
