import React,{Component} from 'react'
import propTypes from 'prop-types'
import { graphql, gql, compose } from 'react-apollo'
import feedQuery from './queries/feedQuery'
// import gql from 'graphql-tag'

class Posts extends Component{
  static propTypes = {
  data: propTypes.object,
}

handleDelete = async (id)=>{
  console.log('id:'+id)
  await this.props.mutate({ variables:{id:id}, refetchQueries:[{ query: feedQuery}] })
}
  refetch = graphql(
    gql`query allPosts{
      allPosts{
        id
        imageUrl
        description
      }
    }`,{
    options: {
      fetchPolicy: 'network-only'
    },}
  )
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
            <br></br>
            <button onClick={ e => this.handleDelete(post.id)}>delete</button>
          </div>
          ))}
      </div>
    )
  }
}

// const FeedQuery = gql`query allPosts{
//   allPosts{
//     id
//     imageUrl
//     description
//   }
// }`

const deleteMutation = gql`
  mutation deletePost($id: ID!){
    deletePost(id: $id){
      id
    }
  }
`


const PostsWithData = graphql(feedQuery, {
  options: {
    fetchPolicy: 'network-only'
  },
})(Posts)

const PostsWithDataAndDelete = graphql(deleteMutation)(PostsWithData)

export default PostsWithDataAndDelete
