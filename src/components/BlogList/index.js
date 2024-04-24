// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, outputList: []}

  async componentDidMount() {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedList = data.map(each => ({
      id: each.id,
      avatarUrl: each.avatar_url,
      author: each.author,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({isLoading: false, outputList: updatedList})
  }

  showLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height={50} width={50} />
    </div>
  )

  showOutput = () => {
    const {outputList} = this.state
    return (
      <ul className="list-container">
        {outputList.map(each => (
          <BlogItem eachItem={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.showLoader() : this.showOutput()}</>
  }
}

export default BlogList
