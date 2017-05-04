import gql from 'graphql-tag'

 export default gql`query getPost($id:ID){
  Post(id:$id){
    id
    description
    imageUrl
  }
}`
