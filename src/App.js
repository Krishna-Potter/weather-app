import React, { useState } from 'react'

const api = {
  key: `9a58e5a3189fec8b0aabdb4a1f16a78a`,
  base: `https://api.openweathermap.org/data/2.5/`
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}$units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div id="main">
      <div id="weather">

        <div id="search-box">
          <input
            type="text"
            id="search-bar"
            placeholder="search location...."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main != `undefined`) ? (
          <div>
            <div id="location-box">
              <div id="location">
                {weather.name},{weather.sys.country}
              </div>
              <div id="date">
                {dateBuilder(new Date())}
              </div>
            </div>

            <div id="weather-box">
              <div id="temp">
                {Math.round(weather.main.temp)}°C
              </div>
              <div id="weather-status">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : ('')}

        <div id="about">
          <div id="role">
            Developed By
          </div>
          <div id="owner-name">
            <a href="https://vebbox.in/krishna/">#Krishna-The-Potter</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
