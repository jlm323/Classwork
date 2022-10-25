

export default function Receipts({receipts}) {
    return (
        <div>
            all receipts here
            {Receipts.map(receipts => (
                <Receipts key={receipts.id} data={receipts} />
            ))}
            
        </div>
    )
}