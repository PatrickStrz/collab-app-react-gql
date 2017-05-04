import React,{Component} from 'react'
import propTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
// import feedQuery from '../queries/feedQuery'
import {getAllPostsQuery} from '../queries/postQueries'
import {deletePostMutation} from '../mutations/postMutations'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import {Link} from 'react-router-dom'

class PostList extends Component{
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
  await this.props.deletePostMutation({ variables:{id:id}, refetchQueries:[{ query: getAllPostsQuery}] })
}

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
              <IconButton
                onClick={ e => this.handleDelete(post.id)}
                tooltip="delete this ting"
              >
                <ActionDelete hoverColor="rgb(209, 65, 65)" />
              </IconButton>
              <Link to={`post/${post.id}`}>Go to post</Link>
            </div>
          </Paper>
        <br/>
        </div>
          ))}
      </div>
    )
  }
}

const PostsWithDataAndMutations = compose(
  graphql(deletePostMutation, {name:"deletePostMutation"}),
  // graphql(updateMutation, {name:"updatePostMutation"}),
  graphql(getAllPostsQuery, {
    options: {
      fetchPolicy: 'network-only'
    },
  })
)(PostList)

export default PostsWithDataAndMutations
