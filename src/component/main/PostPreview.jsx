import React from 'react'

const PostPreview = (props) => {
  const {post, handleClick} = props

  return (
    <div onClick={() => handleClick(post.id)} className="postPreview">
      <div className="title">{post.title}</div>
      <div className="postInfo">
        <div className="date">{post.date}</div>
        <div className="writer">{post.writer}</div>
      </div>
    </div>
  )
}

export default PostPreview
