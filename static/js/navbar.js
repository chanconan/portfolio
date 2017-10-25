//Implement a navbar class

import React from 'react';
import ReactDOM from 'react-dom';

export class Navbar extends React.Component{
    render(){
        return(
            <div>
                <a href="/" class="brand-logo" id="home">Conan Chan</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="about" id="navlink-aboutMe">About <i class="material-icons left">person</i></a></li>
                    <li>
                        <a href="skills" id="navlink-skills">Skills<i class="material-icons left">settings</i></a>
                    </li>
                    <li><a href="projects" id="navlink-projects">Portfolio <i class="material-icons left">folder</i></a></li>
                    <li><a href="contact" id="navlink-contact">Contact <i class="material-icons left">mail_outline</i></a></li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Navbar />, document.getElementById('main'));
