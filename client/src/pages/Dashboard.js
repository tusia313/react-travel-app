import Card from '../components/Card'
import Modal from '../components/Modal'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [posts, setPosts] = useState(null)
    const [mode, setMode] = useState(null)

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/posts')
        const dataObject = response.data.data

        const arrayOfData = Object.keys(dataObject).map((key) => ({
            id: key, // Dodaj ID jako klucz
            ...dataObject[key], // Rozwiń dane posta
        }))
        setPosts(arrayOfData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="app">
            <div className="dashboard">
                <div className="dashboard-info-container">
                    <div>
                        <h1>Adventure anywhere</h1>
                        <p>Keep calm && travel on</p>
                    </div>
                    <button onClick={() => setMode('create')}>Add Your adventure</button>
                </div>
                <div className="posts-container">
                    {posts?.map((post) => (
                        <Link to={`/posts/${post.id}`} id="link" key={post.id}>
                            <Card post={post} />
                        </Link>
                    ))}
                    <div className="add-your-own">
                        <button onClick={() => setMode('create')}>Add Your adventure</button></div>
                </div>
            </div>
            {mode && <Modal mode={mode} setMode={setMode} fetchData={fetchData} />}
        </div>
    )
}

export default Dashboard