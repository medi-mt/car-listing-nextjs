import { useRouter } from "next/router"
import carsData from "../../data/carsData"
import DetailCars from "../../component/template/DetailCars"

function DetailCar() {

    const router = useRouter()

    const { carsID } = router.query
    const containerDetailCar = carsData[carsID - 1]
    return (
        <div>
            <DetailCars data={containerDetailCar} />
        </div>
    )
}

export default DetailCar