import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <div>
        <h2>App</h2>
        <h2>当前计数：{this.state.counter}</h2>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default App;