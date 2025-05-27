import { useState } from 'react'
const Modal = ({mode, setMode}) => {
    const [form, setForm] = useState({
        line: "",
        image: "",
        description: ""
    })

    const createMode = true

    const handleChange = (e) => {
//Przy  bardziej złożonych projektach mozna uzyc prevState, bo normalnie to by było bezpośrdenio nadpisywanie ...form  
        setForm(prevState => (
            {
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className="overlay">
            <div className = "modal">
                <form onSubmit={handleSubmit}>
                    <div className="closing-icon" onClick={() => setMode(null)}>x</div>
                        <h1>{createMode ? "Add" : "Edit"} Your adventure</h1>
                        <h5>Upload a photo of where You have visited</h5>
                        <p>Paste a url from the internet</p>
                        <div className="multi-input">
                            <div className="input-container">
                                <label for="line">FIRST LINE</label>
                                <input
                                id="line"
                                placeholder="line"
                                required
                                name="line"
                                value={form.line}
                                onChange = {handleChange}
                                />
                            </div>
                            <div className="input-container">
                                <label for="country">COUNTRY</label>
                                <input
                                id="country"
                                placeholder="country"
                                required
                                name="country"
                                value={form.country}
                                onChange = {handleChange}
                                />
                            </div>
                            <div className="input-container">
                                <label for="city">CITY</label>
                                <input
                                id="city"
                                placeholder="city"
                                required
                                name="city"
                                value={form.city}
                                onChange = {handleChange}
                                />      
                            </div>
                        </div>
                </form>
            </div>
        </div>
    )
}
export default Modal