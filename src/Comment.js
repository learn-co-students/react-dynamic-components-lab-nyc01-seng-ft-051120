import React, { Component } from 'react'
import BlogPost from './BlogPost'
//your code here
export default class Comment extends Component{
render(){
    return(
        <div className='comment'>
        {this.props.commentText}
      </div>  
    )
}
}