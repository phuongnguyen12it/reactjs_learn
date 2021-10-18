import React, { Component } from 'react'
import styling from './Styling.module.css'
import Child from './Child'
import "./Styling.css"

export default class Styling extends Component {
    render() {
        const styleText =  {
            color: 'pink',
            padding: '15px',
            backgroundColo: 'black'
        }

        return (
            <div>
                <Child />
                <p className="txt">Hello</p>
                <span className={styling.textType}>module class</span>
                <p style={styleText}>noi tuyen css</p>
            </div>
        )
    }
}
