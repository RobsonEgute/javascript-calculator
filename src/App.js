import './App.css';
import React from "react";


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0"
    }
    
  }

  handleClick(event) {
    const num = event.target.textContent;
    if (this.state.input === "0") {
    this.setState({
      input: num
    })
  } 
  if (this.state.input !== "0") {
    this.setState({
      input: this.state.input  + num
    })
  }
  }

  handleZero(event) {
    const displayArr = this.state.input.toString().split(" ")
    const num = event.target.textContent;
    switch(displayArr[displayArr.length - 1]) {
      case "0":
        this.setState({
          input: num 
        })
        break;
      default:
        this.setState({
          input: this.state.input +  num
        })
        break;
    }
 
}
  handleReset() {
    this.setState({
      input: "0"
    })
  }
  handleOperator(event) {
    const operator = event.target.textContent;
    const arrInput = this.state.input.toString().split(" ");
    const lastInput = arrInput[arrInput.length - 2];
    switch(lastInput) {
      case "+":
        this.setState({
          input: this.state.input
        });
        break;
      case "-":
        this.setState({
          input: this.state.input
         });
         break;
      case "*":
        this.setState({
          input: this.state.input
        });
        break;
      case "/":
        this.setState({
          input: this.state.input
        });
        break;
      default:
        this.setState({
          input: this.state.input + " " + operator + " "
        });
        break;
          
    }
      }
  
  handleEvaluate() {
    const equation = this.state.input;
    this.setState({
      input: eval(equation)
    })
  }
  handleDot(event) {
    const display = this.state.input.toString();
    const arrInput = display.split(" ");
    const lastInput = arrInput[arrInput.length - 1];
    if (!lastInput.includes(".")) {
      this.setState({
        input: this.state.input + event.target.textContent
      })
    }
  }

  render() {
    return (
      <div className="calContainer" >
      <div className="display" id="display" style={{fontSize: "40px"}}><p>{this.state.input}</p></div>
      <div className="keysContainer">
      <div>
        <button style={{fontSize: "20px"}} className="numpad" id="one" onClick={this.handleClick.bind(this)}>{"1"}</button>
        <button style={{fontSize: "20px"}} className="numpad" id="two" onClick={this.handleClick.bind(this)}>{"2"}</button>
        <button style={{fontSize: "20px"}} className="numpad" id="three" onClick={this.handleClick.bind(this)}>{"3"}</button>
        <button style={{fontSize: "20px"}} className="symbol" id="clear" onClick={this.handleReset.bind(this)}>{"AC"}</button>
      </div>
        <button style={{fontSize: "20px"}} className="numpad" id="four" onClick={this.handleClick.bind(this)}>{"4"}</button>
        <button style={{fontSize: "20px"}} className="numpad" id="five" onClick={this.handleClick.bind(this)}>{"5"}</button>
        <button style={{fontSize: "20px"}} className="numpad" id="six" onClick={this.handleClick.bind(this)}>{"6"}</button>
        <button style={{fontSize: "20px"}} className="symbol" id="divide" onClick={this.handleOperator.bind(this)}>{"/"}</button>
      <div>
        <button style={{fontSize: "20px"}} className="numpad" id="seven" onClick={this.handleClick.bind(this)}>{"7"}</button>
        <button style={{fontSize: "20px"}} className="numpad" id="eight" onClick={this.handleClick.bind(this)}>{"8"}</button>
        <button style={{fontSize: "20px"}} className="numpad" id="nine" onClick={this.handleClick.bind(this)}>{"9"}</button>
        <button style={{fontSize: "20px"}} className="symbol" id="multiply" onClick={this.handleOperator.bind(this)}>{"*"}</button>
      </div>
      <div>
        <button style={{fontSize: "20px"}} className="numpad" id="zero" onClick={this.handleZero.bind(this)}>{"0"}</button>
        <button style={{fontSize: "20px"}} className="numpad" id="decimal" onClick={this.handleDot.bind(this)}>{"."}</button>
        <button style={{fontSize: "20px"}} className="symbol" id="add" onClick={this.handleOperator.bind(this)}>{"+"}</button>
        <button style={{fontSize: "20px"}} className="symbol" id="subtract" onClick={this.handleOperator.bind(this)}>{"-"}</button>
        <button style={{fontSize: "20px"}} className="symbol" id="equals" onClick={this.handleEvaluate.bind(this)}>{"="}</button>
      </div>
      </div>

      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

export default App;
