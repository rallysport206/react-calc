import React, {Component} from 'react';

class Calculator extends Component{
  constructor(props){
    super(props)
    this.state = {
      total: 0,
      val1: 0,
      val2: 0
    }
    this.addTotal = this.addTotal.bind(this);
    this.box1 = this.box1.bind(this);
    this.box2 = this.box2.bind(this);
  }
    addTotal(e){
      e.preventDefault(e);
      let num1 = parseInt(this.state.val1);
      let num2 = parseInt(this.state.val2);
      this.setState({ total: (num1+num2)});
    }
    box1(event){
      this.setState({val1: event.target.value})
    }
    box2(event){
      this.setState({val2: event.target.value})
    }
  render(){
    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <form onSubmit={this.addTotal}>
            <input type="text" value={this.state.val1} onChange={this.box1} />
              <span>+</span>
              <input type="text" value={this.state.val2} onChange={this.box2} />
              <span>= <h3>{this.state.total}</h3></span>
              <h3>Addition results go here!</h3>
              <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
