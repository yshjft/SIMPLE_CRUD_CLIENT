import React from 'react'
import {dateToString} from '../../lib/dateToString'
import '../../styles/index.scss'

const ReadPresenter = (props) => {
  const {post, moveToUpdate, deletePost} = props

  return (
    <div className="post">
      <div className="postArea">
        <div className="title">{post.title}</div>
        <div className="info">
          <div className="date">{dateToString(post.createdAt, post.updatedAt)}</div>
          <div className="writer">{post.writer}</div>
        </div>
        <div className="buttons">
          <button onClick={moveToUpdate}>EDIT</button>
          <button onClick={deletePost}>DELETE</button>
        </div>
        {post.imageUrl && (
          <div className="imgArea">
            <img src={post.imageUrl} alt="nothing" />
          </div>
        )}
        <pre>{post.content}</pre>
      </div>
    </div>
  )
}

export default ReadPresenter
