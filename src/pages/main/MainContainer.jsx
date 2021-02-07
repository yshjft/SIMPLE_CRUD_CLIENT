import React from 'react'
import Layout from '../../component/common/Layout'
import MainPresenter from '../../presenters/main'

const MainContainer = () => {
  // api 호출 등 다양한 로직 작성
  return (
    <Layout>
      <MainPresenter />
    </Layout>
  )
}

export default MainContainer
