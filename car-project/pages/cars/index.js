import Category from "../../component/module/Category"
import FilterSearch from "../../component/module/FilterSearch"
import CarsPage from "../../component/template/CarsPage"
import carsData from "../../data/carsData"

function Cars() {
    return (
        <div>
            <FilterSearch />
            <Category />
            <CarsPage data={carsData} />
        </div>
    )
}

export default Cars