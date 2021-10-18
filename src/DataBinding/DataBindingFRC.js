import React from 'react'

const student1 = {
    name: 'ST1',
    age: 22
};

export default function DataBindingFRC() {
    const name="Phuong AAA";

    return (
        <div>
            <h1>React Functional Component Binding</h1>
            <hr/>
            <h1 className="text-danger">name: {student1.name} - age: {student1.age}</h1>
        </div>
    )
}
