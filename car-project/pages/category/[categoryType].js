import { useRouter } from 'next/router'
import carsData from "../../data/carsData"
import CarsList from '../../component/template/CarsList';

function CategoryPage() {

    const router = useRouter()
    const { categoryType } = router.query
    const selectedCategory = carsData.filter(car => car.category === categoryType)

    return (
        <div>
            <CarsList data={selectedCategory} />
        </div>
    )
}

export default CategoryPage