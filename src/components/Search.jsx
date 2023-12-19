import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './Search.module.css'

export function Search({ searchCity, value, handleChange, loading }) {
    return (
        <form action="">
            <div className={styles.search}>
                <input
                    value={value}
                    onChange={handleChange}
                    className={styles.inputSearch}
                    placeholder="Ex.: Campinas" type="text"
                />
                <MagnifyingGlass
                    className={styles.icon}
                    size={20}
                    weight="bold"
                />
            </div>
            <button onClick={searchCity} type="submit">{loading}</button>
        </form>
    )
}