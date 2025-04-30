import Card from '../components/Card'
const posts = [
    {
        id: 0,
        title: "Chochołowska Valley",
        address: {
            line: "Skrytka pocztowa 195",
            town: "Zakopane",
            region: "Tatra Mountains",
            country: "Poland",
            coords: [49.236397, 19.793761]
        },
        photo: "https://chocholowska.com/wp-content/uploads/2015/07/12.jpg",
        website: "https://chocholowska.com/",
        description: "The most beautiful valley in Poland's Tatra mountains",
        tag: ["nature", "krokusy", "mountains"]
    }
]
const Dashboard = () => {
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
                    {posts?.map((post) => (
                        <Card key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard