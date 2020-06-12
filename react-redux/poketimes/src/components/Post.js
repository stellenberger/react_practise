import React from 'react'
import { connect } from 'react-redux' 

class Post extends React.Component {
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h3 className="center">{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id == id)
  }
}

export default connect(mapStateToProps)(Post)