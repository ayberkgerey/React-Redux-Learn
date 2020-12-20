import React, {Component } from 'react'

class MusicPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            play: false,
            pause: true

        };

        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
    }

    play = () =>{
        this.setState({
            play: true,
            pause: false
        });
        console.log(this.audio);
        this.audio.play();
    }

    pause = () =>{
        this.audio.pause();
        this.setState({ play: false, pause: true });
    }

    render() {

        return (
            <div>
                <h1>Radio</h1>
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </div>
        );
    }
}

export default MusicPlay
