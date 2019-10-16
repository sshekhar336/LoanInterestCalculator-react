import React, { Component } from 'react'
import './SidebarContent.css';

export class SidebarContent extends Component {

    changeInputHandler = (amountSelected, durationSelected, interestRate, monthlyPayment) => {
        let currentValue = {
            amountSelected: amountSelected,
            durationSelected: durationSelected,
            interestRate: interestRate,
            monthlyPayment: monthlyPayment
        }

        localStorage.setItem('currentValue', JSON.stringify(currentValue));

        this.props.backDropClickHandler();
    }

    render() {
        let localData = JSON.parse(localStorage.getItem('selectionHistory'));

        return (
            <div className='sidebar'>
                <label className="history"> Data History </label>
                <ul>
                    {
                        localData &&
                        localData.map((ldata, index) => {
                            return (
                                <li onClick={() => this.changeInputHandler(ldata.amountSelected, ldata.durationSelected, ldata.interestRate, ldata.monthlyPayment)} key={index}>
                                    {"Amount : " + ldata.amountSelected + " Duration : " + ldata.durationSelected}
                                </li>

                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}

export default SidebarContent