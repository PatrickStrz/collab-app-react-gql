import React from 'react'
// import { Link } from 'react-router-dom'
// import Post from '../components/Post'
import { gql, graphql, compose } from 'react-apollo'
import Paper from 'material-ui/Paper';

class ListPage extends React.Component {
  // static propTypes = {
  //   data: React.PropTypes.object,
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.location.key !== nextProps.location.key) {
  //     this.props.data.refetch()
  //   }
  // }
  state = {
    updatePostForm:{
      description:"",
      imageUrl:"",
    }
  }

  const handleDelete = async(id) =>{
    await this.props.handleDelete({ variables:{id} })
  }

  const handleDelete = async(id) =>{
    await this.props.handleDelete({ variables:{id} })
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
          </div>
        </div>
      )
    }

    return (
      <div >

            <div>New Post 2</div>
          { this.props.data.allPosts.map(post =>{
            <Paper>
            <button onClick={ e => this.props.handleDelete(post.id)}>delete</button>
            <p key={post.id}>postid:{post.id}</p>
            </Paper>
          })
        }
        {this.props.children}
      </div>
    )
  }
}

const FeedQuery = gql`query allPosts {
  allPosts(orderBy: createdAt_DESC) {
    id
    imageUrl
    description
  }
}`

const deleteMutation = gql`mutation deletePost($id: ID!){
  deletePost(id:$id){
    id
    description
  }
}`

const updateMutation = gql`mutation
  updatePost($id: ID!, $description: String, $imageUrl:String){
  updatePost(id:$id, description:$description, imageUrl:$imageUrl){
    id
    description
  }
}`

const ListPageWithData =
compose(
  graphql(FeedQuery, {
    options: {
      fetchPolicy: 'network-only'
    },
  })
  graphql(deleteMutation, {name: deleteMutation}),
  graphql(updateMutation, {name: updatePostMutation})
)
(ListPage)

export default ListPageWithData
