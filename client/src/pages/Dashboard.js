const Dashboard = () => {

    const posts = [
        {
            "id": 0,
            "title": "Lofoten Islands"
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