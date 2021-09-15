import React, { useCallback } from "react";

class UnitConversion extends React.Component {
    constructor () {
        super () 
        this.state = {
           fromNo : "",
           toNo : "",
           select1: "1",
           select2: "1"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState ({
            [name]: value 
        })
    }

    handleSelect(event) {
        const uc = [0, 1, 1000, 0.01, 0.001, 1e-6, 1e-9, 1609.35, 0.9144, 0.3048, 0.0254, 946066e10]
        const {name, value} = event.target
        var num1 
        var num2
        if (name === "select1")
        {
             num1 = parseInt(value)
             num2 = parseInt(this.state.select2)
        }
        else
        {
            num1 = parseInt(this.state.select1)
            num2 = parseInt(value)
        }
        console.log(name)
        console.log(value)
        const inputno = parseFloat(this.state.fromNo)
        const result = ( inputno*uc[num1] ) / uc[num2]
        this.setState ({
            toNo : result.toString(), 
            select1 : num1.toString(), 
            select2: num2.toString() 
        })
        console.log(this.state.select1)
        console.log(this.state.select2)
        console.log(inputno)
        console.log(result)

    }

    render () {
        return (
            <div>
                <input id="textbox" type = "text" name = "fromNo" onChange= {this.handleChange} value= {this.state.fromNo} placeholder= "From"/>
                <br />
                <select size= "10" name = "select1" onChange= {this.handleSelect} value= {this.state.select1}>
                <option value="1">Meter</option>
                <option value="2">Kilometer</option>
                <option value="3">Centimeter</option>
                <option value="4">Millimeter</option>
                <option value="5">Micrometer</option>
                <option value="6">Nanometer</option>
                <option value="7">Mile</option>
                <option value="8">Yard</option>
                <option value="9">Foot</option>
                <option value="10">Inch</option>
                <option value="11">Light Year</option>
                </select>
                <br />
                <div style= {{paddingTop: "7px"}}>
                    <input  id="textbox" type = "text" name = "toNo" onChange= {this.handleChange} value= {this.state.toNo} placeholder= "To"/>
                    <br />
                    <select size= "10" name = "select2" onChange= {this.handleSelect} value= {this.state.select2}>
                    <option value="1">Meter</option>
                    <option value="2">Kilometer</option>
                    <option value="3">Centimeter</option>
                    <option value="4">Millimeter</option>
                    <option value="5">Micrometer</option>
                    <option value="6">Nanometer</option>
                    <option value="7">Mile</option>
                    <option value="8">Yard</option>
                    <option value="9">Foot</option>
                    <option value="10">Inch</option>
                    <option value="11">Light Year</option>
                    </select>
                </div>
                <button onClick = { () =>{
                    this.props.handleBack ()
                }} id="prevbut">
                    <img src= "previous.png"/>
                </button>
            </div>
        )
    }
}

export default UnitConversion