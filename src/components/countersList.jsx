import React, { Component } from 'react';

import Counter from './counter'
class CounterList extends Component {
    render() { 
        console.log("CounterList - render");
        const { counters,onReset,onDelete,onIncrement} = this.props;
        return (  <div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>reset</button>
           { counters.map( counter => 
            <Counter key={counter.id}  
                    counter={counter} 
                    onIncrement={onIncrement} 
                    onDelete={onDelete} />
           )}
        </div>);
    };


}
 
export default CounterList;