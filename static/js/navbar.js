//Implement a navbar class

import React from 'react';
import ReactDOM from 'react-dom';

export class Navbar extends React.Component{
    render(){
        return(
            <div>
                <a href="/" className="brand-logo" id="home">Conan Chan</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="about" id="navlink-aboutMe">About <i className="material-icons left">person</i></a></li>
                    <li>
                        <a href="skills" id="navlink-skills">Skills<i className="material-icons left">settings</i></a>
                    </li>
                    <li><a href="projects" id="navlink-projects">Portfolio <i className="material-icons left">folder</i></a></li>
                    <li><a href="contact" id="navlink-contact">Contact <i className="material-icons left">mail_outline</i></a></li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Navbar />, document.getElementById('main'));
