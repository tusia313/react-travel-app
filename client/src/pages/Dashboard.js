import Card from '../components/Card'
import Modal from '../components/Modal' 
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [posts, setPosts] = useState(null)
    const [mode, setMode] = useState(null)

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:8000/posts')
        const dataObject = response.data.data
        const arrayOfData = Object.keys(dataObject).map((key) => [key, dataObject[key]])
        setPosts(arrayOfData)
    }
    useEffect(() => {
        fetchPosts()
      }, [])
      console.log(posts)
    return (
        <div className="app">
            <div className="dashboard">
                <div className="dashboard-info-container">
                    <div>
                        <h1>Adventure anywhere</h1>
                        <p>Keep calm && travel on</p>
                    </div>
                    <button onClick={()=> setMode('create')}>Add Your adventure</button>
                </div>
                <div className="posts-container">
                    {posts?.map((post) => (
                        <Link to={`/posts/${post[0]}`} id="link" key={post[0]}>
                        <Card post={post[1]}/>
                        </Link>
                    ))}
                </div>
            </div>
            {mode && <Modal mode={mode} setMode={setMode}/>}
        </div>
    )
}

export default Dashboard