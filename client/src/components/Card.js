const Card = ({ post }) => {
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={post.photo} alt={`A photo of ${post.photo}`} />
            </div>
            <div className="info-container">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="tag-container"></div>
            </div>

        </div>
    )
}
export default Card