import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCity from "./weather";
import axios from "axios";
import video from './assets/move/videoplayback.mp4'
import video2 from './assets/move/Футаж. Магическая пыль. Footage..mp4'


class App extends React.Component {


    state = {
        weatherData: null,
        id: -1
    }


    onclickWeather = (id) => {
        //  debugger

        let z = Number(this.places[id].zip)
        let c = this.places[id].countryCode.replace(/['"«»]/g, '')
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${z},${c}&appid=3c93e9d5009f08a00a4ee49f25d37a2c`).then(res => {
            this.setState({
                weatherData: res.data,
                id: id
            })
        })
    }


    componentDidMount() {
    }

    places = [
        {name: "Minsk", zip: "220117", countryCode: "by"},
        {name: "Moscow", zip: "101000", countryCode: "ru"},
        {name: "Saint Petersburg", zip: "198097", countryCode: "ru"}
    ]


    render() {
        let newplaces = this.places.map((place, index) => (
            <WeatherCity className="item" id={index} key={index}
                         weatherData={this.state.id === index ? this.state.weatherData : null}
                         name={place.name}
                         clickWeater={this.onclickWeather}/>
        ))
        return (
            <div className="video">
                <video src={video} autoPlay muted loop id="myVideo"/>
                <div className="App">

                    {newplaces}
                </div>
            </div>
        );
    }
}

export default App;
