import { useState } from 'react'
const Modal = ({ mode, setMode }) => {
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

    return (
        <div className="overlay">
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <div className="closing-icon" onClick={() => setMode(null)}>x</div>
                    <h1>{createMode ? "Add" : "Edit"} Your adventure</h1>
                    <h5>Upload a photo of where You have visited</h5>
                    <p>Paste a url from the internet</p>

                    <div className="multi-input">
                        <div className="img-preview">
                            {form.photo && <img src={form.image} alt="Photo's preview" />}
                        </div>
                        <div className="main-input">
                            <div className="input-container">
                                <label for="photo">PHOTO</label>
                                <input
                                    id="photo"
                                    placeholder="photo url goes here"
                                    required
                                    name="photo"
                                    value={form.photo}
                                    onChange={handleChange}
                                /></div>
                            <div className="input-container">
                                <label for="title">TITLE</label>
                                <input
                                    id="title"
                                    placeholder="Title of Your post"
                                    required
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange} />
                            </div>
                            <div className="input-container">
                                <label for="website">WEBSITE</label>
                                <input
                                    id="website"
                                    placeholder="Website here"
                                    required
                                    name="website"
                                    value={form.website}
                                    onChange={handleChange}
                                /></div>
                        </div>
                    </div>
                    <div className="input-container">
                        <label for="description">DESCRIPTION</label>
                        <input
                            id="description"
                            placeholder="description"
                            required
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="multi-input">
                        <div className="input-container">
                            <label for="line">FIRST LINE</label>
                            <input
                                id="line"
                                placeholder="line"
                                required
                                name="line"
                                value={form.line}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="multi-input">
                        <div className='input-container'>
                            <label for="longitude">LONGITUDE</label>
                            <input
                                id="longitude"
                                placeholder="longitude"
                                required
                                type='number'
                                name="longitude"
                                value={form.longitude}
                                onChange={handleChange}
                            /></div>
                        <div className='input-container'>
                            <label for="latitude">LATITUDE</label>
                            <input
                                id="latitude"
                                placeholder="latitude"
                                type='number'
                                required
                                name="latitude"
                                value={form.latitude}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='input-container'>
                            <label for="region">REGION</label>
                            <input
                                id="region"
                                placeholder="region"
                                required
                                name="region"
                                value={form.region}
                                onChange={handleChange} />
                        </div>
                    </div>
                <br/>
                <input type="submit" value={createMode ? "Submit for review →" : "Edit ✎"} className="submit-button" />
            </form>
        </div>
        </div >
    )
}
export default Modal