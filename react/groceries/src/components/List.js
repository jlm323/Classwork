import items from "./data";

export default function List(data) {

    return (
        <div>
            {items.item}
            {items.quantity}
            {items.units}
        </div>
    )
}