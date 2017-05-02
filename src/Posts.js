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
  await this.props.deletePostMutation({ variables:{id:id}, refetchQueries:[{ query: feedQuery}] })
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
        <h2>Posts Y'ALLLzz</h2>
        {this.props.data.allPosts.map(post => (
          <div key={post.id} >
            <p>{post.description}</p>
            <img src={post.imageUrl} style={{height:"50px", width:"50px"}} alt=""></img>
            <br></br>
            <button onClick={ e => this.handleDelete(post.id)}>delete</button>
          </div>
          ))}
      </div>
    )
  }
}

const deleteMutation = gql`
  mutation deletePost($id: ID!){
    deletePost(id: $id){
      id
    }
  }
`
const updateMutation = gql`mutation
  updatePost($id: ID!, $description: String, $imageUrl:String){
  updatePost(id:$id, description:$description, imageUrl:$imageUrl){
    id
    description
  }
}`

const PostsWithDataAndMutations = compose(
  graphql(deleteMutation, {name:"deletePostMutation"}),
  graphql(updateMutation, {name:"updatePostMutation"}),
  graphql(feedQuery, {
    options: {
      fetchPolicy: 'network-only'
    },
  })
)(Posts)

export default PostsWithDataAndMutations
