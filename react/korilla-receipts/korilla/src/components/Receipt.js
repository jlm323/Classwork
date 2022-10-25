import Data from "./Data"

export default function Receipt(Data) {
    return (
        <div>
            <h2>{Data.person}</h2>
            <h3>Main: {Data.order.main}</h3>
            <h3>Protein: {Data.order.protein}</h3>

        </div>
    )
}