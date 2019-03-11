import React, { Component } from 'react';
import './App.css';
import CounterList from './components/countersList';
import NavBar from './components/navbar';

class App extends Component {

  state = {  
    counters : [
        {id: 1 ,value: 0},
        {id: 2 ,value: 0},
        {id: 3 ,value: 0},
        {id: 4 ,value: 0},
    ]
  };

  constructor(){
    super();
    console.log("app - constructor");
  }

  componentDidMount(){
    console.log("app - mounted");
    //best place for ajax call.
  }

  render() {
    console.log("app - rendered");
    return (
      <div className="App">
          <NavBar
            totalCounters={this.state.counters.filter(c => c.value >0).length}  
          />
        <main className="containers">
         <CounterList                    
              counters={this.state.counters}  
              onIncrement={this.handleIncrement} 
              onDelete={this.handleDelete} 
              onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters: counters});
  }
  handleReset = () =>{
      this.setState({counters:  [
          {id: 1 ,value: 0},
          {id: 2 ,value: 0},
          {id: 3 ,value: 0},
          {id: 4 ,value: 0},
      ]});
  }
  handleDelete = (counterId) =>{
      console.log("handle delete received", counterId);
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters: counters});
  };
}

export default App;
