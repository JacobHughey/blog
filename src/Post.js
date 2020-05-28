import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'



class Post extends Component {
    render() {
        return (
            <div className="Post">
                <Card className="mt-4">
                    <Card.Body>
                        <Card.Title className="font-weight-bold mb-4">{this.props.title}</Card.Title>
                        <FontAwesomeIcon icon={faUserCircle} size="3x" className="mb-2" color="gray"></FontAwesomeIcon>
                        <Card.Text>{this.props.author}</Card.Text>
                        
                        <hr />
                        <Card.Text>{this.props.post}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Post