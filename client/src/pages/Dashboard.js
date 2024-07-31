const Dashboard = () => {
    return (
        <div className="app">
            <div className="dashboard">
                <div className="dashboard-info-container">
                    <div>
                        <h1>Adventure anywhere</h1>
                        <p>keep calm & travel on</p>
                    </div>
                    <button class="cta">
                        <span class="hover-underline-animation"> + Add adventure</span>
                        <path
                            id="Path_10"
                            data-name="Path 10"
                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                            transform="translate(30)"
                        ></path>
                    </button>
                </div>

                <div className="posts-container"></div>
            </div>
        </div >
    )
}
export default Dashboard