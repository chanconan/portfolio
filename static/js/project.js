import React from 'react';
import ReactDOM from 'react-dom';

export class Project extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: this.props.projectName,
            hover: false
        }

        this.showDescription = this.showDescription.bind(this);
        this.showProjectTitle = this.showProjectTitle.bind(this);
        this.projectWebsite = this.projectWebsite.bind(this);
    }

    showDescription(e){
        this.setState({hover: true});
        switch(this.props.projectName){
            case "Group Chat":
                this.setState({text: 'Users are able to prompted to create a username to access the chatroom. Other users are able to see when new users enter the room and new users can see previous messages.'});
                break;
            case "Star Registry":
                this.setState({text: 'Users can create a post and allow others to add comments to individual posts. The home page will sort through all the stars and grab the five posts with the most comments. Original user can edit and delete their own posts.'});
                break;
            case "Day Trip":
                this.setState({text: 'By utilizing the Google Places and Map API, a user is able to create a plan of what he or she wants to do. It searches the location given for either food or activities and displays some of the results on a map for users to click on.'})
                break;
            default:
                this.setState({text: 'There is no project of with this title'})
        }
    }

    showProjectTitle(e){
        this.setState({text: this.props.projectName, hover:false })
    }

    //DEPLOY THE PROJECTS AND REPLACE THE URLS
    projectWebsite(e){
        switch(this.props.projectName){
            case "Group Chat":
                window.location.href = "http://52.25.42.96";
                break;
            case "Star Registry":
                window.location.href = "http://52.27.195.111";
                break;
            case "Day Trip":
                window.location.href = "http://54.69.148.63";
                break;
            default:
                alert('Page is not valid');
                break;
        }
    }
    render(){
        var style =  {
            margin: 8,
            width: '30%',
            height: 150,
            display: 'inline-block',
            float: 'left',
            textAlign: 'center',
            borderStyle: 'solid',
            fontSize: 16
        };
        if(this.state.hover){
            style.fontSize = 12
        }
        else{
            style.fontSize = 16
        }
        return(
            <div style={style} onMouseEnter={this.showDescription} onMouseLeave={this.showProjectTitle} onClick={this.projectWebsite}>
                <p> {this.state.text} </p>
            </div>
        )
    }

}


ReactDOM.render(
    <div style={{height: 150}}>
        <h1>Projects</h1>
        <Project projectName="Group Chat"/>
        <Project projectName="Star Registry"/>
        <Project projectName="Day Trip"/>
    </div>
    , document.getElementById('project1'));
