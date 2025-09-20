import { useRouter } from 'next/router'
import carsData from "../../data/carsData"
import CarsList from '../../component/template/CarsList';


function CategoryPage() {

    const router = useRouter()
    const { categoryType } = router.query
    console.log(categoryType);
    const selectedCategory = carsData.filter(car => car.category === categoryType)

    return (
        <div>
            <CarsList selectedCategory={selectedCategory} />
        </div>
    )
}

export default CategoryPage