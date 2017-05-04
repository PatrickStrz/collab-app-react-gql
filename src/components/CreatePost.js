import React,{Component} from 'react'
// import propTypes from 'prop-types'
import { graphql, gql } from 'react-apollo'
import feedQuery from '../queries/feedQuery'

class CreatePost extends Component{

  state = { description:"", imageUrl:"",}

  handlePost = async () => {
    const {description, imageUrl} = this.state
     await this.props.addPost({
      variables: {description, imageUrl},
      refetchQueries: [ {query: feedQuery},]})
    this.setState({description:"", imageUrl:""})
  }

  render(){
    return(
          <div>
            <h1>Create a Challenge</h1>
            <input type="text" title="description" value={this.state.description} onChange={ e => this.setState({description: e.target.value})}></input>
            <br></br>
            <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={e => this.setState({imageUrl: e.target.value}) }></input>
            <p>Description:{this.state.description}</p>
            {this.state.imageUrl && <img src={this.state.imageUrl} style={{height:"100px", width:"100px"}} alt=""></img>}
            <br></br>
            <button onClick={ e => this.handlePost()}>Submit problemo</button>
          </div>
    )
  }
}

const addMutation = gql`mutation createPost($description: String, $imageUrl: String){
  createPost(description:$description, imageUrl:$imageUrl ){
    id
    description
    imageUrl
  }
}`

const addPostWithMutation = graphql(addMutation, {name:'addPost'})(CreatePost)

export default addPostWithMutation
