import React, {Component} from 'react';
import './App.css';
import data from './data'
import People from "./Component/People.js";
import NavBar from "./Component/NavBar.js";
import Controls from "./Component/Controls";

class App extends Component {
    constructor() {
        super();
        this.state = {
            people: data,
            currentUser: 0
        }
        this.nextUser = this.nextUser.bind(this)
        this.previousUser = this.previousUser.bind(this)
    }

    nextUser() {
        if (this.state.currentUser >= this.state.people.length - 1) {
            this.setState({
                currentUser: 0
            })
        } else {
            this.setState({currentUser: this.state.currentUser + 1})
        }
    }

    previousUser() {
        if (this.state.currentUser <= 0) {
            this.setState({
                currentUser: this.state.people.length -1
            })
        } else {
            this.setState({currentUser: this.state.currentUser - 1})
        }
    }

    render() {
        const person = this.state.people.map((element,index) => {
            return <div>
                <People card={element} arrLength={this.state.people.length}/>
            </div>
        })
        return <div>
            <NavBar />
            {person[this.state.currentUser]}
            <Controls nextUser={this.nextUser} previousUser={this.previousUser}/>
        </div>
    }
}

export default App;
