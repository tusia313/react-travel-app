import { useState } from 'react'
const Modal = ({mode, setMode}) => {
    console.log(mode)
    const [form, setForm] = useState({
        line: "",
        image: "",
        description: ""
    })
    console.log(form)

    const createMode = true
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
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
                                value={''}
                                onChange = {handleChange}
                                />
                            </div>
                            <div className="input-container"></div>
                            <div className="input-container"></div>
                        </div>
                </form>
            </div>
        </div>
    )
}
export default Modal