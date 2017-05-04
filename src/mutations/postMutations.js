import gql from 'graphql-tag'

export const deletePostMutation = gql`
  mutation deletePost($id: ID!){
    deletePost(id: $id){
      id
    }
  }
`
export const updatePostMutation = gql`
  mutation updatePost($id: ID!, $description: String, $imageUrl:String){
  updatePost(id:$id, description:$description, imageUrl:$imageUrl){
    id
    description
  }
}`
