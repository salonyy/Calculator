import React from "react";
import { Component } from "react";
import UnitConversion from "./UnitConversion";

class Calci extends Component {
    constructor () {
        super () 
        this.state = {
            number1 : "",
            number2 : "",
            operator : "",
            isUnitConversion : false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }

    handleBack () {
        this.setState ({
            isUnitConversion : false
        })
    }

    handleClick (event) {
        const val = event.target.value
        if(val === "AC")
        {
            this.setState ({number1 : "", number2 : "", operator : ""})
        }
        else if (val === "uc")
        {
            console.log ("abc")
            this.setState ({
                isUnitConversion : true
            })
        }
        else if (val === "+/-")
        {
            if(this.state.number1 === "" || this.state.number1[0] !== "-")
            {
                this.setState (function (prevState) {
                    return {
                        number1 : "-" + prevState.number1
                    }
                })
            }
            else
            {
                this.setState (function (prevState) {
                    return {
                        number1 : prevState.number1.substring (1, prevState.number1.length)
                    }
                })
            }
            
        }
        else if(val === "--")
        {
            if(this.state.number1 === "")
            {
                this.setState (function (prevState) {
                    return {
                        operator : "",
                        number1 : prevState.number2,
                        number2 : ""
                    }
                })
            }
            else
            {
                this.setState (function (prevState) {
                    console.log(prevState.number1)
                    return {
                        number1 : prevState.number1.slice(0, -1)
                    }
                })
            }
        }
        else if(val === "+" || val === "-" || val === "*" || val === "/")
        {
            if(this.state.number1 === "")
            {
                this.setState ({
                    operator : val
                })
                return
            }
            this.setState (function (prevState) { 
                var ans 
                var num1 = parseFloat (prevState.number1)
                var num2 = parseFloat (prevState.number2)
                if (prevState.operator === "" || prevState.operator === "=")
                {
                    ans = num1
                }
                else if(prevState.operator === "+")
                {
                    ans = num2 + num1
                }
                else if(prevState.operator === "-")
                {
                    ans = num2 - num1
                }
                else if(prevState.operator === "*")
                {
                    ans = num2 * num1
                }
                else if(prevState.operator === "/")
                {
                    ans = num2 / num1
                }
                return {
                    operator : val,
                    number2 : ans.toString(),
                    number1 : ""
                }
            })
        }
        else if(val === "=")
        {
            if(this.state.number2 === "")
            {
                this.setState ({
                    operator : val
                })
                return
            }
            this.setState (function (prevState) {
                var ans
                var num1 = parseFloat (prevState.number1)
                var num2 = parseFloat (prevState.number2)
                if(prevState.operator === "+")
                {
                    ans = num2 + num1
                }
                else if(prevState.operator === "-")
                {
                    ans = num2 - num1
                }
                else if(prevState.operator === "*")
                {
                    ans = num2 * num1
                }
                else if(prevState.operator === "/")
                {
                    ans = num2 / num1
                }
                return {
                    operator : val,
                    number1 : ans.toString(),
                    number2 : ""
                }
            })
        }
        else
        {
            this.setState ((prevState) =>{
                return {
                    number1 : prevState.number1 + val
                }
            })
        }
    }

    render () {    
        if (this.state.isUnitConversion)
        {
            return (
                <UnitConversion handleBack = {this.handleBack}/>
            )
        }
        return (
            <div style = {{backgroundColor : "black", width : "106%"}}>
                <input id="textboxcl" type = "text" value = {this.state.number2 + this.state.operator + this.state.number1}></input>
                <table>
                    <tr>
                        <td><button onClick = {this.handleClick} value = "AC">AC</button></td>
                        <td><button style = {{fontSize : "80px"}} onClick = {this.handleClick} value = "uc">&#8596;</button></td>
                        <td><button onClick = {this.handleClick} value  = "+/-">±</button></td>
                        <td><button onClick = {this.handleClick} value="/">÷</button></td>
                    </tr>
                    <tr>
                        <td><button onClick = {this.handleClick} value="7">７</button></td>
                        <td><button onClick = {this.handleClick} value="8">８</button></td>
                        <td><button onClick = {this.handleClick} value="9">９</button></td>
                        <td><button onClick = {this.handleClick} value="*">x</button></td>
                    </tr>
                    <tr>
                        <td><button onClick = {this.handleClick} value="4">４</button></td>
                        <td><button onClick = {this.handleClick} value="5">５</button></td>
                        <td><button onClick = {this.handleClick} value="6">６</button></td>
                        <td><button onClick = {this.handleClick} value="+">＋</button></td>
                    </tr>
                    <tr>
                        <td><button onClick = {this.handleClick} value="1">１</button></td>
                        <td><button onClick = {this.handleClick} value="2">２</button></td>
                        <td><button onClick = {this.handleClick} value="3">３</button></td>
                        <td><button onClick = {this.handleClick} value="-">–</button></td>
                    </tr>
                    <tr>
                        <td><button onClick = {this.handleClick} value = ".">•</button></td>
                        <td><button onClick = {this.handleClick} value="0">０</button></td>
                        <td><button onClick = {this.handleClick} value = "--">⌫</button></td>
                        <td><button onClick = {this.handleClick} value = "=">＝</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Calci