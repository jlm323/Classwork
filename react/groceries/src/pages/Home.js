import List from "../components/List";

export default function Home({item}) {
    return (
        <div>
            <h1>Groceries</h1>
            <List item={item} />
        </div>
        
    )
}