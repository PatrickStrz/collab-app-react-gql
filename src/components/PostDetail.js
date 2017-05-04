import React,{Component} from 'react'
// import propTypes from 'prop-types'
// import { graphql } from 'react-apollo'
import { graphql, compose } from 'react-apollo'
import {getPostQuery} from '../queries/postQueries'
// import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
// import Paper from 'material-ui/Paper'


class PostDetail extends Component {

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
    <p>
      {description}
    </p>
    <img src={imageUrl} alt="" style={{height:"500px", width:"500px"}}></img>
  </div>
    )
  }
}

const PostWithQuery = graphql(getPostQuery, {
  options: ({match}) => (
    {
      variables:{
        id: match.params.id
      }
    }
  )
})(PostDetail)

export default PostWithQuery
