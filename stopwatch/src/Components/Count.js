import React, {Component} from 'react';

class Count extends Component {
    constructor(props){
        super(props);
//we set the variable time to 0 in the this.state array
        this.state = {
            time: 0
        };

        this.timer = this.timer.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }
//Here i will create variables with events, add if statements and Set intervals
    timer(event){
        event.preventDefault();
        const clickButton = event.target.id;
        if(clickButton === "start"){
            let id = setInterval(this.startTimer ,1000);
            this.setState({clearId:id});
            // to update state correctly
        } else if (clickButton === 'reset') {
            this.setState({time:0});
        } else if (clickButton === 'pause') {
            clearInterval(this.state.clearId);
        }
    }

    startTimer(){
        setInterval(this.setState({ time: this.state.time + 1}), 1000);
    }

    render() {
        return (
            <div id="buttons">
                    <h1>{this.state.time}</h1>

                    <button onClick={this.timer} id="start">Start</button>
                    <button onClick={this.timer} id="pause">Pause</button>
                    <button onClick={this.timer} id="reset">Reset</button>
{/* //this populates the buttons and the timer on the page */}
            </div>
        )
    }
}



export default Count;