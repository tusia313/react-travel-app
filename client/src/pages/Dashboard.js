import Card from '../components/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:8000/posts')
        const dataObject = response.data.data
        const arrayOfData = Object.keys(dataObject).map((key) => [key, dataObject[key]])
    }
    useEffect(() => {
        fetchPosts()
      }, [])
    return (
        <div className="app">
            <div className="dashboard">
                <div className="dashboard-info-container">
                    <div>
                        <h1>Adventure anywhere</h1>
                        <p>Keep calm && travel on</p>
                    </div>
                    <button>Add Your adventure</button>
                </div>
                <div className="posts-container">
                    {/* {posts?.map((post) => (
                        <Link to={`/posts/${post.id}`} id="link" key={post.id}>
                        <Card post={post}/>
                        </Link>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard