import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import blogData from './blogData.js'


class AddAPost extends Component {

    constructor() {
        super()
        this.state = {
            author: '',
            title: '',
            post: ''
        }
        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handlePostChange = this.handlePostChange.bind(this)
        this.submitPost = this.submitPost.bind(this)
    }
    handleAuthorChange(event) {
        this.setState({ author: event.target.value })
    }
    handleTitleChange(event) {
        this.setState({ title: event.target.value })
    }
    handlePostChange(event) {
        this.setState({post: event.target.value})
      }
    submitPost() {
        let newPost = {
            author: this.state.author,
            title: this.state.title,
            post: this.state.post
        }
        blogData.push(newPost)
        alert('Your blog was posted. Please click on "Read a blog" to see your post live.')
    }

    render() {
        return (
            <div className="AddAPost">
                <h1 className="text-center mt-4">Add a blog:</h1>
                <Form>
                    <Form.Group className="mt-4" controlId="AddAPostForm.Title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Title of your post"
                            value={this.state.title}
                            onChange={this.handleTitleChange} />
                    </Form.Group>
                    <Form.Group controlId="AddAPostForm.Author">
                        <Form.Label>Author:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Your name"
                            value={this.state.author}
                            onChange={this.handleAuthorChange} />
                    </Form.Group>
                    <Form.Group controlId="AddAPostForm.BlogPost">
                        <Form.Label>Write your blog here:</Form.Label>
                        <Form.Control as="textarea" rows="10" className="mb-4" 
                            onChange={this.handlePostChange}
                        />
                        <Button variant="primary" onClick={this.submitPost}>Post</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default AddAPost
