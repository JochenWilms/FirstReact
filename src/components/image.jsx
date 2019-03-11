import React, { Component } from 'react'
class Image extends Component {
    state = { 
        imageurl: 'https://picsum.photos/200'
     }
    render() { 
        return ( <div>
                <img src={this.state.imageurl} alt="" />
        </div> );
    }
}
 
export default Image;