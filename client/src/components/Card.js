import Tag from './Tag'

const Card = ({ post, tag }) => {
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={post.photo} alt={`A view of ${post.photo}`} />
            </div>
            <div className="info-container">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="tag-container">
                    {post.tags.map((tag, _index) => (
                        <Tag key = {_index} tag = {tag} />
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Card