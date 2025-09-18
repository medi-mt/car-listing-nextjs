import Sedan from "../../component/icons/Sedan"
import Suv from "../../component/icons/Suv"
import Hatchback from "../../component/icons/Hatchback"
import Sport from "../../component/icons/Sport"
import style from "./category.module.css"
import Link from "next/link"

function Category() {
    return (
        <div className={style.container}>

            <Link href={"/category/sedan"}>
                <div>
                    <p>Sedan</p>
                    <Sedan />
                </div>

            </Link>
            <Link href={"/category/suv"}>
                <div>
                    <p>Suv</p>
                    <Suv />
                </div>
            </Link>
            <Link href={"/category/hatchback"}>

                <div>
                    <p>Hatchback</p>
                    <Hatchback />
                </div>
            </Link>
            <Link href={"/category/sport"} >
                <div>
                    <p>Sport</p>
                    <Sport />
                </div>
            </Link>
        </div >
    )
}

export default Category