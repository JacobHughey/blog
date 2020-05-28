import React, { Component } from 'react'
import Header from './Header.js'
import Recents from './Recents.js'
import AddAPost from './AddAPost.js'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      onPostMode: false,
      buttonText: "Add a blog",
    }
    this.handleAddABlogClick = this.handleAddABlogClick.bind(this)
  }
  handleAddABlogClick() {
    this.setState({
      onPostMode: !this.state.onPostMode,
    })
    if (this.state.buttonText === "Add a blog") {
      this.setState({
        buttonText: "Read a blog",
      })
    } else if (this.state.buttonText === "Read a blog") {
      this.setState({
        buttonText: "Add a blog",
      })
    }
  }


  render() {
    return (
      <div className="App">
        <Container>
          <Header handleAddABlogClick={this.handleAddABlogClick} buttonText={this.state.buttonText} />
          {this.state.onPostMode ? null : <Recents />}
          {this.state.onPostMode ? <AddAPost /> : null}
        </Container>
      </div>
    )
  }
}

export default App
