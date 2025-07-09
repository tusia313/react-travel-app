import { useState } from 'react'
import { selectedTags } from '../helpers'
import axios from 'axios'
const Modal = ({ mode, setMode, currentPost, fetchData }) => {
    
    // Gdy użytkownik otworzy modal w trybie edycji, pola formularza są już wypełnione istniejącymi danymi posta
    const [form, setForm] = useState({
        title: currentPost?.data.title || "",
        description: currentPost?.data.description || "",
        line: currentPost?.data.address.line || "",
        country: currentPost?.data.address.country || "",
        town: currentPost?.data.address.town || "",
        region: currentPost?.data.address.region || "",
        longitude: currentPost?.data.address.coords[0] || "",
        latitude: currentPost?.data.address.coords[1] || "",
        website: currentPost?.data.website || "",
        photo: currentPost?.data.photo || "",
        sea: currentPost?.data.tags.includes("sea") || false,
        cliff: currentPost?.data.tags.includes("cliff") || false,
        nature: currentPost?.data.tags.includes("nature") || false,
        coast: currentPost?.data.tags.includes("coast") || false,
        Gdynia: currentPost?.data.tags.includes("Gdynia") || false,
        krokusy: currentPost?.data.tags.includes("krokusy") || false,
        mountains: currentPost?.data.tags.includes("mountains") || false
    })

    const createMode = mode === "create"

    const handleChange = (e) => {
        //Przy  bardziej złożonych projektach mozna uzyc prevState, bo normalnie to by było bezpośrdenio nadpisywanie ...form  
        setForm(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
            })
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            title: form.title,
            description: form.description,
            address: {
                line: form.line,
                country: form.country,
                town: form.town,
                region: form.region,
                coords: [Number(form.longitude), Number(form.latitude)]
            },
            website: form.website,
            photo: form.photo,
            tags: selectedTags(form)
        }
        try {
            if (createMode) {
                const response = await axios.post("http://localhost:8000/create", {
                    data: data
                })
                
                const success = response.status === 200
                if (success) {
                    setMode(null)
                    fetchData()
                } else {
                    console.error(response)
                }
            } else {
                const response = await axios.put(`http://localhost:8000/update/${currentPost.documentId}`,{
                    data: data,
                })
                const success = response.status === 200
                if (success) {
                    setMode(null)
                    fetchData()
                } else {
                    console.error(response)
                }
            }

        } catch (error) {
            console.error("Error submitting form: ", error)
        }
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
                            {form.photo && <img src={form.photo} alt="Photo's preview" />}
                        </div>
                        <div className="main-input">
                            <div className="input-container">
                                <label htmlFor="photo">PHOTO</label>
                                <input
                                    id="photo"
                                    placeholder="photo url goes here"
                                    required
                                    name="photo"
                                    value={form.photo}
                                    onChange={handleChange}
                                /></div>
                            <div className="input-container">
                                <label htmlFor="title">TITLE</label>
                                <input
                                    id="title"
                                    placeholder="Title of Your post"
                                    required
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="website">WEBSITE</label>
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
                        <label htmlFor="description">DESCRIPTION</label>
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
                            <label htmlFor="line">FIRST LINE</label>
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
                            <label htmlFor="country">COUNTRY</label>
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
                            <label htmlFor="town">CITY</label>
                            <input
                                id="town"
                                placeholder="town"
                                required
                                name="town"
                                value={form.town}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="multi-input">
                        <div className='input-container'>
                            <label htmlFor="longitude">LONGITUDE</label>
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
                            <label htmlFor="latitude">LATITUDE</label>
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
                            <label htmlFor="region">REGION</label>
                            <input
                                id="region"
                                placeholder="region"
                                required
                                name="region"
                                value={form.region}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="multi-input">
                        <div className="input-container">
                            <label htmlFor="sea-checkbox">sea</label>
                            <input
                                id="sea-checkbox"
                                type="checkbox"
                                name="sea"
                                checked={form.sea}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="cliff-checkbox">cliff</label>
                            <input
                                id="cliff-checkbox"
                                type="checkbox"
                                name="cliff"
                                checked={form.cliff}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="nature-checkbox">nature</label>
                            <input
                                id="nature-checkbox"
                                type="checkbox"
                                name="nature"
                                checked={form.nature}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="coast-checkbox">coast</label>
                            <input
                                id="coast-checkbox"
                                type="checkbox"
                                name="coast"
                                checked={form.coast}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="Gdynia-checkbox">Gdynia</label>
                            <input
                                id="Gdynia-checkbox"
                                type="checkbox"
                                name="Gdynia"
                                checked={form.Gdynia}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="krokusy-checkbox">krokusy</label>
                            <input
                                id="krokusy-checkbox"
                                type="checkbox"
                                name="krokusy"
                                checked={form.krokusy}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="mountains-checkbox">mountains</label>
                            <input
                                id="mountains-checkbox"
                                type="checkbox"
                                name="mountains"
                                checked={form.mountains}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <br />
                    <input type="submit" value={createMode ? "Submit for review →" : "Edit ✎"} className="submit-button" />
                </form>
            </div>
        </div >
    )
}
export default Modal