import Tag from './Tag'
const Card = ({ post }) => {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={post.photo} alt={`A amazing view of ${post.title}`}></img>
            </div>
            <div className="info-container">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="tag-container">
                    {post.tags.map((tag, _index) => <Tag key={_index} tag={tag} />)}
                </div>
            </div>

        </div>
    )
}

export default Card