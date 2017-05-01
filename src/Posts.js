import React,{Component} from 'react'
import propTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Posts extends Component{
  static propTypes = {
  data: propTypes.object,
}
  render(){
    if (this.props.data.loading){
      return(<div>
        <h1>Loading...</h1>
      </div>)
    }
    return(
      <div>
        <h2>Posts Y'ALLL</h2>
        {this.props.data.allPosts.map(post => (
          <div>
            <p key={post.id}>{post.description}</p>
            <img src={post.imageUrl} style={{height:"50px", width:"50px"}} alt=""></img>
          </div>
          ))}
      </div>
    )
  }
}

const FeedQuery = gql`query allPosts{
  allPosts{
    id
    imageUrl
    description
  }
}`

const PostsWithData = graphql(FeedQuery, {
  options: {
    fetchPolicy: 'network-only'
  },
})(Posts)

export default PostsWithData
