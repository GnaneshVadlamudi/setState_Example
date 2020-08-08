import React from "react";
import "./styles.css";

class App extends React.Component {

  state = { count: 0 }

  /* state updation with out using prevState
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }*/
  
  handleIncrement = () => {
    this.setState((prevState) => 
     ({ count: prevState.count + 1 }))
  }
  
  handleDecrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1}
    })
  }

    render() {
      return (
        <div>
          <div><b>updated value: </b>
            {this.state.count}
          </div>
          <button onClick={this.handleIncrement}>Increment by 1</button>
          <button onClick={this.handleDecrement}>Decrement by 1</button>
        </div>
      )
    }
  }

  export default App;
