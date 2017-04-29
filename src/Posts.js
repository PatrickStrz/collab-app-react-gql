import React,{Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Posts extends Component{
  static propTypes = {
  data: React.PropTypes.object,
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
            <p key={post.id}>{post.description}</p>
          ))}
        {/* {console.log(this.props.data)} */}
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
