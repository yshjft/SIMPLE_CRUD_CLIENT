import React from 'react'
import '../../styles/index.scss'

const ReadPresenter = (props) => {
  const {post, moveToUpdate, deletePost} = props

  return (
    <div className="post">
      <div>
        <div className="title">{post.title}</div>
        <div className="info">
          <div className="date">{post.date}</div>
          <div className="writer">{post.writer}</div>
        </div>
        <div className="buttons">
          <button onClick={moveToUpdate}>EDIT</button>
          <button onClick={deletePost}>DELETE</button>
        </div>
        <pre>{post.content}</pre>
      </div>
    </div>
  )
}

export default ReadPresenter