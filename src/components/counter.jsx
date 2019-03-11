import React, { Component } from 'react';

class Counter extends Component {


    styles = {
        fontSize: 25,
        fontWeight: "bold"
    };

    componentDidUpdate(prevProps,prevState){
        console.log("prevProps: ",prevProps )
        console.log("prevState: ",prevState )
        if(prevProps.counter.value !== this.props.value){
            //perform ajax call ...
        }
    }

    componentWillUnmount(){
        console.log("Counter - unMount");
    }

    render() { 
        console.log("Counter -  render")
        let classes = this.getBadgeClasses();
        return (
            <div> 
 
                <span className={classes}>{this.formatCount()}</span> 
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sml">increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-sml btn-danger m-2">delete</button>                
            </div>
        );
    }


    getBadgeClasses() {
        let classes = "badge  m-2 ";
        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount(){
        const count = this.props.counter.value;
        return count === 0 ? 'zero' : count;
    }


}
export default Counter;