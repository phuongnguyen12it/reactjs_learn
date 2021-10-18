import React, { Component } from 'react'

export default class DataBinding extends Component {

    //Thuoc tinh cua component
    name = 'Nguyen Van Phuong';

    //Thuoc tinh object student
    student = {
        name: 'ST1',
        age: 22
    }

    //Tat ca component phai tra ve jsx

    //Binding bang phuong thuc
    renderImage = () => {
        const virus = {
            name: 'COVID',
            id: 'covid-vu-han',
            alias: 'SARs'
        }
        return <image src="" alt="aaa"/>
    }

    render() {
        //Bien cua ham render
        const school = 'DuongDoi';

        const student1 = {
            name: 'ST1',
            age: 22
        }

        return (
            <div>
                <h1>React Class Component Binding</h1>
                <hr/>
                <h1>hello: {this.name} - schools: {school}</h1>
                <h1>name: {this.student.name} - age: {this.student.age}</h1>
                <h1>name: {student1.name} - age: {student1.age}</h1>
                <h3>Binding Function</h3>
                {this.renderImage}
            </div>
        )
    }
}
