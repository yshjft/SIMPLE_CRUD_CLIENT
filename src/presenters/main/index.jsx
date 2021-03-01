import React from 'react'
import PostPreview from '../../component/main/PostPreview'
import '../../styles/index.scss'

const MainPresenter = (props) => {
  const {allPosts = [], handleInputChange, handleSearch, handleClickItem} = props

  return (
    <div className="posts">
      <input placeholder="제목 검색" onKeyUp={handleInputChange} />
      <button onClick={handleSearch}>검색</button>
      {allPosts.map((post, index) => (
        <PostPreview key={index} post={post} handleClick={handleClickItem} />
      ))}
    </div>
  )
}

export default MainPresenter
