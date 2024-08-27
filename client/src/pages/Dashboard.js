import Card from '../components/Card'

const Dashboard = () => {
    const posts = [
        {
            id: 0,
            title: "Lofoten Islands",
            address: {
                line: "House 45",
                town: "Flakstad",
                region: "Lofoten",
                country: "Norway",
                coords: [
                    13.615140,
                    68.148995
                ]
            },
            photo:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/10/Intrepid-Travel-Norway_Reine_Lofoten_Islands_ss_382716112.jpg",
            website: "https://www.fjordtravel.no",
            description: "Island full of fiords and magic!",
            tags: ["nature", "hiking", "mountains"]
        }
    ]

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
                        <Card key={post.id} post={post}></Card>
                    ))}
                </div>
            </div>
        </div >
    )
}
export default Dashboard