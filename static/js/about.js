import React from 'react';
import ReactDOM from 'react-dom';

export class About extends React.Component{
    render() {
        return (
            <div className="container row">
                <h2 className="col s12">A bit about me...</h2>
                <div className="col s12">
                    <p>Prior to becoming a <span className="deep-purple-text lighten-1">full-stack developer</span>, I worked as a chemist in a manufacturing company. Some days after work, I wanted to take a breather from chemistry. My friends and family suggested to try some programming since I grew up around computers, and it was always something I was working with. After taking some free online courses, I realized how much I enjoyed programming and problem solving. I decided to make the transition into web development.</p>
                    <p>I recently graduated from the Coding Dojo bootcamp in San Jose, where I had the opportunity to work with veterans and newcomers. Coding with both groups helped improve my own work because I was able to ask questions about parts where I had trouble with and help others in need.</p>
                </div>
                <a href='/static/pdf/Resume.pdf'> Click Here for my Resume! </a>
            </div>
        );
    }
}

ReactDOM.render(<About />, document.getElementById('aboutMe'));
