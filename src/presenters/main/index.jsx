import React from 'react'
import PostPreview from '../../component/main/PostPreview'
import '../../styles/index.scss'

const MainPresenter = (props) => {
  const {allPosts, handleClickItem} = props

  return (
    <div className="posts">
      {allPosts.map((post, index) => (
        <PostPreview key={index} post={post} handleClick={handleClickItem} />
      ))}
    </div>
  )
}

export default MainPresenter
