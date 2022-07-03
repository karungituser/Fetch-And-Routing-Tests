// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
      title: eachItem.title,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-container">
            {blogsData.map(eachItem => (
              <BlogItem key={eachItem.id} blogData={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
