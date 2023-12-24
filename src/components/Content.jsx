import styles from "./Content.module.css";
import { Forecast } from "./Forecast";

export function Content({ value, temperature, description, forecast }) {
  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const now = new Date();
  const day = now.getDay();
  console.log(daysOfWeek[day]);
  forecast[1].day = daysOfWeek[day + 2];
  forecast[2].day = daysOfWeek[day + 3];
  if (daysOfWeek[day] === "Quinta-feira") {
    forecast[2].day = daysOfWeek[0];
  } else if (daysOfWeek[day] === "Sexta-feira") {
    forecast[1].day = daysOfWeek[0];
    forecast[2].day = daysOfWeek[1];
  } else if (daysOfWeek[day] === "Sábado") {
    forecast[1].day = daysOfWeek[1];
    forecast[2].day = daysOfWeek[2];
  } else if (daysOfWeek[day] === "Domingo") {
    forecast[1].day = daysOfWeek[2];
    forecast[2].day = daysOfWeek[3];
  }
  return (
    <main className={styles.content}>
      <h1 className={styles.cityName}>{value}</h1>
      <section className={styles.informations}>
        <h2 className={styles.currentWeather}>Tempo atual</h2>
        <p className={styles.temperature}>{temperature}</p>
        <p className={styles.statusWeather}>{description}</p>
      </section>
      <section>
        <h2 className={styles.forecastTitle}>Previsão</h2>
        <ol className={styles.forecastTitle}>
          <Forecast
            forecast="Amanhã"
            forecastTemperature={forecast[0].temperature}
            forecastWind={forecast[0].wind}
          />
          <Forecast
            forecast={forecast[1].day}
            forecastTemperature={forecast[1].temperature}
            forecastWind={forecast[1].wind}
          />
          <Forecast
            forecast={forecast[2].day}
            forecastTemperature={forecast[2].temperature}
            forecastWind={forecast[2].wind}
          />
        </ol>
      </section>
    </main>
  );
}
