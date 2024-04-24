// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id, imageUrl, avatarUrl, title, topic, author} = eachItem

  return (
    <Link to={`blogs/${id}`}>
      <li className="each-blog-item">
        <div className="img-container">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="details-container">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="profile-photo-container">
            <img src={avatarUrl} alt={title} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
