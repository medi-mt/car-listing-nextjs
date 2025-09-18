import { useRouter } from 'next/router'
import carsData from "../../data/carsData"
function CategoryPage() {
    const router = useRouter()
    const { categoryType } = router.query
    console.log(categoryType);
    const selectedCategory = carsData.filter(car => car.category === categoryType)
    return (
        <div>CategoryPage</div>
    )
}

export default CategoryPage