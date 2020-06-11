import React from 'react'

class Post extends React.Component {
  state = {
    id: null
  }

  componentDidMount() {
    let id = this.props.match.params.post_id
    this.setState({
      id
    })
  }

  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>
      </div>
    )
  }
}

export default Post