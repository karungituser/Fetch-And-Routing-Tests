// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogData

  return (
    <li className="blog-list-container">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img className="image-url" src={imageUrl} alt={`item${id}`} />
          <div className="title-details">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>
            <div className="avatar-author">
              <img className="avatar-url" src={avatarUrl} alt={`avatar${id}`} />
              <p className="item-author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
