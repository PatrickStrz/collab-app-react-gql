import React,{Component} from 'react'
import propTypes from 'prop-types'
import { graphql, gql, compose } from 'react-apollo'
import feedQuery from './queries/feedQuery'
// import gql from 'graphql-tag'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import ActionDelete from 'material-ui/svg-icons/action/delete';

class Posts extends Component{
  static propTypes = {
  data: propTypes.object,
}

style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  color: '#ffffff'
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
          <Paper style={{...this.style, backgroundImage:`url(${post.imageUrl})`}} zDepth={5}>
            <div  >
              <p>{post.description}</p>
              {/* <img src={post.imageUrl} style={{height:"50px", width:"50px"}} alt=""></img> */}
              <br></br>
              {/* <button onClick={ e => this.handleDelete(post.id)}>delete</button> */}
              <IconButton
                onClick={ e => this.handleDelete(post.id)}
                tooltip="delete this ting"
              >
                <ActionDelete hoverColor="rgb(209, 65, 65)" />
              </IconButton>
            </div>
          </Paper>
        <br/>
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
