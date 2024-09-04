import { Link } from 'react-router-dom'
import Card from '../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Dashboard = () => {

    const [posts, setPosts] = useState(null)

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/posts')
        // teraz zmieniam objekt na łańcuch, żeby móc z tym pracowac
        const dataObject = response.data.data
        const arrayOfData = Object.keys(dataObject).map(key => [key, dataObject[key]])
        setPosts(arrayOfData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="app">
            <div className="dashboard">
                <div className="dashboard-info-container">

                    <h1>Adventure anywhere</h1>
                    <div className="dashboard-button-container">
                        <h4>keep calm & travel on</h4>
                        <button>+ add adventure</button>
                    </div>

                </div>

                <div className="posts-container">
                    {/*  w .map() musimy dać w key i w nawais _index - ale tutaj jest id, więc wychodzi na to samo */}
                    {posts?.map((post) => (
                        <Link to={`/post/${post[0]}`} key={post[0]} id="link">
                            <Card post={post[1]}></Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}
export default Dashboard