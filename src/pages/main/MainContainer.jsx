import React, {useEffect, useState} from 'react'
import Layout from '../../component/common/Layout'
import MainPresenter from '../../presenters/main'
import {getPosts} from '../../api/post'

const MainContainer = (props) => {
  const {history} = props
  const [allPosts, setAllPosts] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        const posts = await getPosts()
        setAllPosts(posts)
      } catch (error) {
        setAllPosts([])
      }
    })()
  }, [])

  function handleClickItem(id) {
    history.push(`/post/${id}`)
  }

  return (
    <Layout>
      <MainPresenter allPosts={allPosts} handleClickItem={handleClickItem} />
    </Layout>
  )
}

export default MainContainer
