export default function Gif({ gif }) {
    
    const handleClick = (e) => {
        e.preventDefault()
        getGif()
    }

    return (
        <div>
            <h1>Random gif</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}