import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {


    render() {
        return (
            <div className="Header">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Blog</Navbar.Brand>
                    <Button
                        className="ml-auto"
                        variant="outline-light"
                        onClick={this.props.handleAddABlogClick}>
                        <FontAwesomeIcon icon={this.props.buttonText === "Add a blog" ?faPlus : faEye} className="mr-2"></FontAwesomeIcon>
                        {this.props.buttonText}
                    </Button>
                </Navbar>
            </div>
        );
    }
}

export default Header
