import Category from "../../component/module/Category"
import CarsPage from "../../component/template/CarsPage"
import carsData from "../../data/carsData"

function Cars() {
    return (
        <div>
            <Category />
            <CarsPage data={carsData} />
        </div>
    )
}

export default Cars