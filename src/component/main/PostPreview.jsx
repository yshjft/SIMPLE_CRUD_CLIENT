import React from 'react'
import {dateToString} from '../../lib/dateToString'

const PostPreview = (props) => {
  const {post, handleClick} = props

  return (
    <div onClick={() => handleClick(post.id)} className="postPreview">
      <div className="title">{post.title}</div>
      <div className="postInfo">
        <div className="date">{dateToString(post.createdAt, post.updatedAt)}</div>
        <div className="writer">{post.writer}</div>
      </div>
    </div>
  )
}

export default PostPreview
