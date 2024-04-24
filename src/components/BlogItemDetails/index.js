// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, itemData: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/blogs/${id}`

    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
      author: data.author,
    }
    this.setState({isLoading: false, itemData: updatedData})
  }

  showLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Circles" color="blue" height={50} width={50} />
    </div>
  )

  showItemOutput = () => {
    const {itemData} = this.state
    const {title, avatarUrl, author, imageUrl, content} = itemData

    return (
      <div className="item-output-container">
        <h1 className="item__heading">{title}</h1>
        <div className="profile-container">
          <img src={avatarUrl} alt="avatar" />
          <p>{author}</p>
        </div>
        <div className="each-item-img-container">
          <img src={imageUrl} alt={title} className="each-item-img" />
        </div>
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return <>{isLoading ? this.showLoader() : this.showItemOutput()}</>
  }
}
export default BlogItemDetails
