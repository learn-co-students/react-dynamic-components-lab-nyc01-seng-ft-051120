//your code here

// here, Comment is a JavaScript Object that renders a 'virtual' react element (as its return value / output), which maps to an actual DOM element 

import React, { Component } from 'react'

class Comment extends Component {

    render() {

        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        ) 
    } 

}

export default Comment 