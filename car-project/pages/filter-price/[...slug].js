import { useRouter } from "next/router"
import carsData from "../../data/carsData"
import Card from "../../component/module/Card"
import CarsList from "../../component/template/CarsList"
function FiltredPrice() {

    const router = useRouter()
    const [minPrice, maxPrice] = router.query.slug || []

    const carTarget = carsData.filter(car => car.price > minPrice && car.price < maxPrice)
    console.log(carTarget);

    if (!carTarget.length) return <p>No cars found in this price range.</p>

    return (
        <CarsList data={carTarget} />
    )
}

export default FiltredPrice 