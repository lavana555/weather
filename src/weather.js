import React from 'react';
import styles from './weather.module.css';


class WeatherCity extends React.Component {

    clickCity = () => {
        this.props.clickWeater(this.props.id)
    }
    tempValue = (temp) => {
        return ((Number(temp) - 273.15).toFixed(2))
    }

    render() {
        return (

            <div className={styles.item}>

                <div className={styles.weatheritem} onClick={this.clickCity}>
                    <span>{this.props.name}</span>
                </div>

                <div className={styles.weatherDescription}>
                    {this.props.weatherData && <div>
                        {this.props.weatherData.weather[0].main} in {this.props.weatherData.name}
                        <img src={"http://openweathermap.org/img/w/" + this.props.weatherData.weather[0].icon + ".png"}
                             alt={this.props.weatherData.description}/>
                        <p>Current: {this.tempValue(this.props.weatherData.main.temp)}°</p>
                        <p>High: {this.tempValue(this.props.weatherData.main.temp_max)}°</p>
                        <p>Low: {this.tempValue(this.props.weatherData.main.temp_min)}°</p>
                        <p>Wind Speed: {(this.props.weatherData.wind.speed)} mi/hr</p>

                    </div>

                    }
                </div>

            </div>

        );
    }
}

export default WeatherCity;
