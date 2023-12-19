import { useState } from 'react'
import styles from './App.module.css'
import { Content } from './components/Content'
import { Search } from './components/Search'
import loader from './assets/loader.gif'

function App() {
  const [content, setContent] = useState();
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(<span>Pesquisar Cidade</span>);

  const handleChange = (event) => {
    setValue(event.target.value)
  };


  function searchCity(event) {
    event.preventDefault();
    if (value.length === 0) {
      return;
    } else {
      setLoading(<img width='30px' src={loader}></img>)
      fetch(`https://goweather.herokuapp.com/weather/${value}`)
        .then(
          data => data.json()
        )
        .then(
          data => {
            console.log(data.forecast)
            if (data.description === 'Partly cloudy') {
              data.description = 'Parcialmente nublado';
            } else if (data.description === 'Sunny') {
              data.description = 'Ensolarado';
            } else if (data.description === 'Light snow') {
              data.description = 'Neve leve';
            } else if (data.description === 'Clear') {
              data.description = 'Tempo limpo';
            } else if (data.description === 'Rain with thunderstorm') {
              data.description = 'Chuva com tempestade';
            } else if (data.description === 'Light rain') {
              data.description = 'Chuva leve';
            } else if (data.description === 'Light rain shower') {
              data.description = 'Leves pancadas de chuva'
            }
            setLoading(<span>Pesquisar Cidade</span>)
            setContent(
              <Content
                forecast={data.forecast}
                value={value}
                forecastTemperature={data.forecast.temperature}
                forecastWind={data.forecast.wind}
                temperature={data.temperature}
                description={data.description}
              />)
          }
        )
    }
    setValue('')
  }

  return (
    <div className={styles}>
      <Search
        loading={loading}
        value={value}
        handleChange={handleChange}
        searchCity={searchCity}
      />
      {content}
    </div>
  )
}

export default App
