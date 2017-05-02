import React,{Component} from 'react'
// import propTypes from 'prop-types'
import { graphql, gql, compose } from 'react-apollo'
// import gql from 'graphql-tag'
import feedQuery from './queries/feedQuery'

class CreateChallenge extends Component{

  state = { description:"", imageUrl:"",}

  handlePost = async () => {
    const {description, imageUrl} = this.state
    console.log(description,imageUrl)
    await this.props.addPost({ variables: {description, imageUrl}, refetchQueries: [feedQuery,]})
  }

  // handleDelete = async () => {
  //   const {id} = this.
  // }

  render(){
    return(
          <div>
            <h1>Create a Challenge</h1>
            <input type="text" title="description" value={this.state.description} onChange={ e => this.setState({description: e.target.value})}></input>
            <br></br>
            <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={e => this.setState({imageUrl: e.target.value}) }></input>
            <p>Description:{this.state.description}</p>
            <p>imageUrl:{this.state.imageUrl}</p>
            <button onClick={ e => this.handlePost()}>Submit problemo</button>
          </div>
    )
  }
}

// const feedQuery = gql`query allPosts {
//   allPosts(orderBy: createdAt_DESC) {
//     id
//     imageUrl
//     description
//   }
// }`

const addMutation = gql`mutation createPost($description: String, $imageUrl: String){
  createPost(description:$description, imageUrl:$imageUrl ){
    id
    description
    imageUrl
  }
}`
const deleteMutation = gql`mutation deletePost($id: ID!){
  deletePost(id:$id){
    id
    description
  }
}`
const addPostWithMutations = compose(
  graphql(addMutation, {name: 'addPost'}),
  graphql(deleteMutation, {name: 'deletePost'})
)(CreateChallenge)

export default addPostWithMutations
