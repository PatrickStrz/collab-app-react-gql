import gql from 'graphql-tag'

export const getAllPostsQuery = gql`query getAllPosts {
  allPosts(orderBy: createdAt_DESC) {
    id
    imageUrl
    description
  }
}`

 export const getPostQuery = gql`query getPost($id:ID){
  Post(id:$id){
    id
    description
    imageUrl
  }
}`
