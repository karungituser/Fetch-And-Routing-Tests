// Write your JS  code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {avatarUrl, author, content, imageUrl, title} = blogData

    return (
      <div className="container">
        <h1 className="data-title">{title}</h1>
        <div className="author-avatar">
          <img src={avatarUrl} alt={author} className="data-avatar" />
          <p className="data-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="data-image" />
        <p className="data-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-data-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
