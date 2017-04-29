import React from 'react'
// import { Link } from 'react-router-dom'
// import Post from '../components/Post'
import { gql, graphql } from 'react-apollo'

class ListPage extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.location.key !== nextProps.location.key) {
  //     this.props.data.refetch()
  //   }
  // }

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

            <div>New Post</div>
          {this.props.data.allPosts.map(post => (

            <p key={post.id}>postid:{post.id}</p>
          ))}
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

const ListPageWithData = graphql(FeedQuery, {
  options: {
    fetchPolicy: 'network-only'
  },
})(ListPage)

export default ListPageWithData
