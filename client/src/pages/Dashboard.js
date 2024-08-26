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
            description: "Beatiful Lofoten Islands",
            tags: ["nature", "hiking", "mountains"]
        }
    ]

    return (
        <div className="app">
            <div className="dashboard">
                <div className="dashboard-info-container">
                    <h1>Adventure anywhere</h1>
                    <div className="dashboard-button-container">
                        <p>keep calm & travel on</p>
                        <button>+ add adventure</button>
                    </div>

                </div>

                <div className="posts-container"></div>
            </div>
        </div >
    )
}
export default Dashboard