import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Post from './Post.js'
import blogData from './blogData.js'



class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        {
          blogData.map((post) => {
            return (

              <Col>
                <Post
                  author={post.author}
                  title={post.title}
                  post={post.post}
                  className="mb-4"
                />
              </Col>

            )
          })
        }
      </div>
    );
  }
}

export default Posts
