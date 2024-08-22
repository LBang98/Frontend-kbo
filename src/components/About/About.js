import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import axios from "axios";
import Map from "./Map";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                { name: 'Seoul', temp: 0, temp_max: 0, temp_min: 0, humidity: 0, desc: '', icon: '', loading: true },
                { name: 'Suwon', temp: 0, temp_max: 0, temp_min: 0, humidity: 0, desc: '', icon: '', loading: true },
                { name: 'Incheon', temp: 0, temp_max: 0, temp_min: 0, humidity: 0, desc: '', icon: '', loading: true },
                { name: 'Changwon', temp: 0, temp_max: 0, temp_min: 0, humidity: 0, desc: '', icon: '', loading: true },
                { name: 'Daejeon', temp: 0, temp_max: 0, temp_min: 0, humidity: 0, desc: '', icon: '', loading: true },
                { name: 'Daegu', temp: 0, temp_max: 0, temp_min: 0, humidity: 0, desc: '', icon: '', loading: true },
                { name: 'Gwangju', temp: 0, temp_max: 0, temp_min: 0, humidity: 0, desc: '', icon: '', loading: true },
                { name: 'Busan', temp: 0, temp_max: 0, temp_min: 0, humidity: 0, desc: '', icon: '', loading: true },
            ],
            selectedCity: null, // 선택된 도시를 추적하기 위한 상태
        };
    }

    componentDidMount() {
        this.state.cities.forEach((city, index) => {
            const apiKey = process.env.REACT_APP_WEATHER_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`;

            axios
                .get(url)
                .then((responseData) => {
                    const data = responseData.data;
                    const updatedCities = [...this.state.cities];
                    updatedCities[index] = {
                        ...city,
                        temp: data.main.temp,
                        temp_max: data.main.temp_max,
                        temp_min: data.main.temp_min,
                        humidity: data.main.humidity,
                        desc: data.weather[0].description,
                        icon: data.weather[0].icon,
                        loading: false,
                    };
                    this.setState({ cities: updatedCities });
                })
                .catch((error) => console.log(error));
        });
    }

    handleCitySelect = (cityName) => {
        this.setState({ selectedCity: cityName });
    };

    renderWeatherCard(city) {
        const stadiumNames = {
            Seoul: ['잠실야구장', '고척스카이돔'],
            Suwon: '수원KT위즈파크',
            Incheon: '인천SSG랜더스필드',
            Changwon: '창원NC파크',
            Daejeon: '한화생명이글스파크',
            Daegu: '대구삼성라이온즈파크',
            Gwangju: '광주기아챔피언스필드',
            Busan: '부산사직야구장'
        };

        const imgSrc = `https://openweathermap.com/img/w/${city.icon}.png`;
        if (city.loading) {
            return <p>Loading...</p>;
        } else {
            return (
                <Col md={3} className="project-card" key={city.name}>
                    <h4>{Array.isArray(stadiumNames[city.name]) ? stadiumNames[city.name][0] : stadiumNames[city.name]}</h4>
                    <div>
                        <b>{(city.temp - 273.15).toFixed(0)}°</b>
                    </div>
                    <img src={imgSrc} alt="weather-icon" />{' '}
                    <text>{city.desc}</text>
                    <div>
                        최고: {(city.temp_max - 273.15).toFixed(0)}° 최저: {(city.temp_min - 273.15).toFixed(0)}°
                    </div>
                    <div>습도: {city.humidity}%</div>
                </Col>
            );
        }
    }

    render() {
        const selectedCity = this.state.cities.find(city => city.name === this.state.selectedCity);

        return (
            <Container fluid className="about-section">
                <Particle />
                <Container>
                    <h1 className="project-heading">
                        <strong className="purple">야구장별 날씨</strong>
                    </h1>

                    <Techstack onSelectCity={this.handleCitySelect} />

                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={3} className="project-card">
                            <Map/>
                        </Col>
                        {selectedCity && this.renderWeatherCard(selectedCity)}
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default About;
