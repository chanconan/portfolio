//Set up Parallax class to use for multiple images.

import React from 'react';
import ReactDOM from 'react-dom';

export class Parallax extends React.Component{
    render(){
        return (
            <div class="parallax">
                <img src={"/static/img/" + this.props.img} />
            </div>
        )
    }
}

ReactDOM.render(<Parallax img="parallax.jpg"/>, document.getElementById('parallax'));
ReactDOM.render(<Parallax img="parallax1.jpg"/>, document.getElementById('parallax1'));
ReactDOM.render(<Parallax img="parallax3.jpg"/>, document.getElementById('parallax2'));
