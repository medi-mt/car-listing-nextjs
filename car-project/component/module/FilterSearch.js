import { useState } from "react"
import styles from "./FilterSearch.module.css"
import { useRouter } from "next/router"


function FilterSearch() {

    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const router = useRouter()

    const filterHandler = () => {
        router.push(`/filter-price/${minPrice}/${maxPrice}`)
    }

    return (
        <div className={styles.container}>
            <div>
                <input
                    placeholder="Inter min-price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    placeholder="Inter max-price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>

            <button onClick={filterHandler}>Search</button>
        </div>
    )
}

export default FilterSearch