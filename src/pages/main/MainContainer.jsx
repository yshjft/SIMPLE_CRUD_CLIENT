import React from 'react'
import Layout from '../../component/common/Layout'
import MainPresenter from '../../presenters/main'

const tmpAllPosts = [
  {
    id: 1,
    title: '안녕하세요!',
    writer: '개발자',
    date: '2021.02.08'
  },
  {
    id: 1,
    title: '안녕하세요222!',
    writer: '개발자',
    date: '2021.02.08'
  }
]

const MainContainer = (props) => {
  const {history} = props

  // api 호출 등 다양한 로직 작성 (게시물 전체 조회 로직 작성)

  function handleClickItem(id) {
    history.push(`/post/${id}`)
  }

  return (
    <Layout>
      <MainPresenter allPosts={tmpAllPosts} handleClickItem={handleClickItem} />
    </Layout>
  )
}

export default MainContainer
