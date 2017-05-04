import React,{Component} from 'react'
// import propTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import {getPostQuery} from '../queries/postQueries'
import {deletePostMutation, updatePostMutation} from '../mutations/postMutations'
// import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
// import Paper from 'material-ui/Paper'

class PostDetail extends Component {

  handleDelete = async () => {
      await this.props.deletePostMutation()
  }

  render(){

    if (this.props.data.loading){
      return(<div>
        <h1>Loading...</h1>
      </div>)
    }

    const {id,description,imageUrl} = this.props.data.Post

    return(
  <div>
    <h1>Post detail for post:{id}</h1>
    <Link to='/'>go back home</Link>
    <RaisedButton name="delete" secondary={true} onTouchTap={()=> this.handleDelete()}>Delete</RaisedButton>
    <p>
      {description}
    </p>
    <img src={imageUrl} alt="" style={{height:"500px", width:"500px"}}></img>

  </div>

    )
  }
}

const options = ({match}) => ({
      variables:{
        id: match.params.id
      }
    })

const PostWithDataAndMutations = compose(
  graphql(deletePostMutation,{
    options,
    name: "deletePostMutation",
  }),
  graphql(getPostQuery,{
    options
  })
)(PostDetail)

export default PostWithDataAndMutations
