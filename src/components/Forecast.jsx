import { Thermometer, Wind } from '@phosphor-icons/react'
import styles from './Forecast.module.css'

export function Forecast({ forecast, forecastTemperature, forecastWind }) {
    return (
        <li className={styles.forecast}>
            <h3 className={styles.day}>{forecast}</h3>
            <div className={styles.info}><Thermometer size={20} weight="bold" /><p className={styles.infoText}>{forecastTemperature}</p></div>
            <div className={styles.info}><Wind size={20} weight="bold" /><p className={styles.infoText}>{forecastWind}</p></div>
        </li>
    )
}