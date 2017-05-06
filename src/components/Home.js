import React, {Component} from 'react'
import PostList from './PostList'
import CreatePost from './CreatePost'
import PostCreateForm from './PostCreateForm'
import { connect } from 'react-redux'
import {actionTest2} from './actions'
import { bindActionCreators } from 'redux'


class Home extends Component {
  // logSubmit = (data) => {
  //   console.log(data.title)
  // }

  render(){
    return(
      <div>
        <PostList />
        <CreatePost />
        {/* <PostCreateForm onSubmit={this.logSubmit} /> */}
        {/* <button onClick={(e)=>{this.props.actionTest()}}>Testing Action</button> */}
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         actionTest,
//         actionTest2,
//         handleSubmit
//     }, dispatch)
// }

// const handleSubmit = (data) => {
//   console.log(data.title)
// }

// export default connect(null, mapDispatchToProps)(Home)

export default Home
