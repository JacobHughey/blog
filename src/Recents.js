import React, { Component } from 'react'
import Posts from './Posts.js'



class Recents extends Component {
  render() {
    return (
      <div className="Recents text-center">
        <h1 className="mt-4">Recent Posts:</h1>
        <Posts />
      </div>
    );
  }
}

export default Recents
