import React, { Component } from 'react';
import './Main.css';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amountSelected: 500,
            durationSelected: 6,
            interestRate: 0.25,
            monthlyPayment: 93,
            dataSelected: [
                {
                    amountSelected: 500,
                    durationSelected: 6,
                    interestRate: 0.25,
                    monthlyPayment: 93
                },
            ],
        }
    }

    handleAmountSelection = (e) => {
        this.setState({
            amountSelected: e.target.value,
        }, this.fetchData())
    }

    handleDurationSelection = (e) => {
        this.setState({
            durationSelected: e.target.value,
        }, this.fetchData())
    }

    readValueHandler = () => {

        let amountSelected = parseInt(document.getElementById("loanamount").value, 10);
        let rangeSelected = parseInt(document.getElementById("loanrange").value, 10);
        let interestRate = this.state.interestRate;
        let monthlyPayment = this.state.monthlyPayment;

        let data = {
            "amountSelected": amountSelected,
            "durationSelected": rangeSelected,
            "interestRate": interestRate,
            "monthlyPayment": monthlyPayment,
        }
        let count = 0;

        let tempArray = this.state.dataSelected;
        count = 1;
        tempArray.map((oneData, index) => {

            if ((oneData.amountSelected === data.amountSelected) && (oneData.durationSelected === data.durationSelected)) {
                count = 0;
            }
            return 0;
        })
        if (count > 0) {
            tempArray.push(data)
            this.setState({
                dataSelected: tempArray
            },
                localStorage.setItem('selectionHistory', JSON.stringify(this.state.dataSelected))
            )
        }

    }

    UNSAFE_componentWillReceiveProps(){
        console.log("rrrrrrrrrrrrrrrrrrrrr", this.props.sidebarOpen)
        if(this.props.sidebarOpen){
            let currentVal = JSON.parse(localStorage.getItem('currentValue'));

        currentVal &&
            this.setState({
                amountSelected: currentVal.amountSelected,
                durationSelected: currentVal.durationSelected,
                interestRate: currentVal.interestRate,
                monthlyPayment: currentVal.monthlyPayment
            })
        }
        
    }


    fetchData = () => {
        axios.get('https://ftl-frontend-test.herokuapp.com/interest?amount=' + this.state.amountSelected + '&numMonths=' + this.state.durationSelected)
            .then(res => {
                this.setState({
                    interestRate: res.data.interestRate,
                    monthlyPayment: res.data.monthlyPayment.amount,
                })
            })
            .catch(err => console.log(err));

    }

    render() {

        return (
            <div className='display'>
                <div className='content'>
                    <label className="label"> Loan Amount: </label>
                    <label className="displayValue">{'$' + this.state.amountSelected}</label>
                    <input type="range" min={500} max={5000}
                        id="loanamount"
                        className="range"
                        value={this.state.amountSelected}
                        onChange={this.handleAmountSelection}
                        //onInput={this.readValueHandler}
                        onMouseUp={this.readValueHandler} />
                    <label className='rangeDisplay'>{'($500 to $5000)'}</label>

                </div>

                <div className='content'>
                    <label className="label">Loan Duration (in months):</label>
                    <label className="displayValue">{this.state.durationSelected + ' months'}</label>
                    <input type="range" min={6} max={24}
                        className="range"
                        id="loanrange"
                        value={this.state.durationSelected}
                        onChange={this.handleDurationSelection}
                        onMouseUp={this.readValueHandler}
                    />

                    <label className='rangeDisplay'>{'(6 months to 24 months)'}</label>
                </div>

                <div className='content'>
                    <label className="label">Calculated interest rate:</label>
                    <label className="displayValue">{this.state.interestRate + '%'}</label>
                </div>

                <div className='content'>
                    <label className="label">Monthly payments:</label>
                    <label className="displayValue">{'$' + this.state.monthlyPayment}</label>
                </div>

            </div>
        )
    }
}

export default Main
