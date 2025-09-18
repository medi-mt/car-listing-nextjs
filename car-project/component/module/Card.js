import style from "./card.module.css"
import Loction from "../icons/Location"
import Link from "next/link";

function Card({ data }) {
    console.log("kk");
    const { id, name, loction, price, year, model, image, distance } = data
    return (
        <Link href={`/cars/${id}`}>
            <div className={style.container}>
                <img src={image} className={style.image} />
                <h4 className={style.title}>{`${name} ${model}`}</h4>
                <p className={style.detail}>{`${year} | ${distance}`}km</p>
                <div className={style.footer}>
                    <p> $ {price}</p>
                    <div className={style.loction}>
                        <p>{loction}</p>
                        <Loction />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card