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
            photo: "https: //chocholowska.com/galeria3/",
            website: "https://chocholowska.com/",
            description: "The most beautiful valley in Poland's Tatra mountains",
            tag: ["nature", "krokusy", "mountains"]
        }
]
const Card = () => {
    return (
        <div className="card-container">
            <div className="img-container">
                {/* <img src ={} alt={}></img> */}
            </div>
            <div className="info-container">
                <h3>TITLE</h3>
                <p>DESCRIPTION</p>
                <div className="tag-container"></div>
            </div>

        </div>
    )
}

export default Card