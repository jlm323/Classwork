import {useState} from "react";

export default function NotesForm({ addMoreToFavorite, movieId }) {

    let [form, setForm] = useState({
        rating: "",
        notes: ""
    })

    const handleChange = (evt) => {
        console.log(evt.target.value)
        // if (evt.target.id === "rating") {
        //                 // setForm(prevState => {
        //                 //     return {...prevState, rating: evt.target.value}
        //                 // })
        //     setForm({...form, rating: evt.target.value})
        // } else {
        //     setForm({...form, notes: evt.target.value})
        // }

        // computer property name (JS)
        setForm({...form, [evt.target.id]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addMoreToFavorite(form, movieId)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="rating">Personal Rating:</label>
            <br/>
            <input type="text" id="rating" value={form.rating} onChange={handleChange}/>
            <br/><br/>
            <label htmlFor="notes">My Thoughts:</label>
            <br/>
            <textarea id="notes" cols="30" rows="10" value={form.notes} onChange={handleChange}></textarea>
            <br/><br/>
            <button>Submit</button>
        </form>
    )
}