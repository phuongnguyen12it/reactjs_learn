import React, { Component } from 'react'

export default class RenderWithLoop extends Component {

    productList = [
        { id: 1, name: 'black car', price: 1000, img: '../carbasic/products/black-car.jpg' },
        { id: 2, name: 'red car', price: 1000, img: '../carbasic/products/red-car.jpg' },
        { id: 3, name: 'silver car', price: 1000, img: '../carbasic/products/silver-car.jpg' },
        { id: 4, name: 'steel car', price: 1000, img: '../carbasic/products/steel-car.jpg' },
    ]

    renderTable = () => {
        let trComponentArr = [];
        for (let i = 0; i <= this.productList.length - 1 ; i++) {
            let product = this.productList[i];
            console.log(product);
            let trJSX = <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img style={{ width: "200px" }} src={product.img} /></td>
                <td></td>
            </tr>
            trComponentArr.push(trJSX);
        }
        return trComponentArr;
    }

    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
