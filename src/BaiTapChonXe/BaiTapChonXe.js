import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgProduct: '../assets/products/black-car.jpg'
    }

    renderCar = (newImgSrc) => {
        let newState = {
            imgProduct: newImgSrc
        }

        this.setState(newState);
    }

    styleCssPointer = {
        cursor: 'pointer'
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <img style={{ width: "100%" }} src={ this.state.imgProduct } alt="black-car" />
                    </div>
                    <div className="col-5">
                        <div className="card text-black">
                            <div className="card-header text-primary">Choose Color</div>
                            <div className="card-body">
                                <div className="row border border-light pt-2 pb-2 mt-2 cursor" onClick={() => {this.renderCar('../assets/products/black-car.jpg')}}>
                                    <img className="col-2" src={ '../assets/icons/icon-black.jpg' } alt="icon-black"/>
                                    <div className="col-10">
                                        <h3>Black Color</h3>
                                        <p>small</p>
                                    </div>
                                </div>
                                <div className="row border border-light pt-2 pb-2 mt-2" onClick={() => {this.renderCar('../assets/products/red-car.jpg')}}>
                                    <img className="col-2" src={ '../assets/icons/icon-red.jpg' } alt="icon-red"/>
                                    <div className="col-10">
                                        <h3>Red Color</h3>
                                        <p>small</p>
                                    </div>
                                </div>
                                <div className="row border border-light pt-2 pb-2 mt-2" onClick={() => {this.renderCar('../assets/products/silver-car.jpg')}}>
                                    <img className="col-2" src={ '../assets/icons/icon-silver.jpg' } alt="icon-silver"/>
                                    <div className="col-10">
                                        <h3>Sliver Color</h3>
                                        <p>small</p>
                                    </div>
                                </div>
                                <div className="row border border-light pt-2 pb-2 mt-2" onClick={() => {this.renderCar('../assets/products/steel-car.jpg')}}>
                                    <img className="col-2" src={ '../assets/icons/icon-steel.jpg' } alt="icon-steel"/>
                                    <div className="col-10">
                                        <h3>Steel Color</h3>
                                        <p>small</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
