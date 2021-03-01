import React, {useEffect, useState} from 'react'
import {debounce} from 'lodash'
import Layout from '../../component/common/Layout'
import MainPresenter from '../../presenters/main'
import {getPosts} from '../../api/post'

const MainContainer = (props) => {
  const {history} = props
  const [allPosts, setAllPosts] = useState()
  const [titleOfPost, setTitleOfPost] = useState('')

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

  const searchByDebounce = debounce(async (title) => {
    const response = await getPosts({title})
    setAllPosts(response)
  }, 500)

  function handleInputChange(e) {
    setTitleOfPost(e.target.value)
    searchByDebounce(e.target.value)
  }

  async function handleSearch() {
    try {
      const posts = await getPosts({title: titleOfPost})
      setAllPosts(posts)
    } catch (err) {
      setAllPosts([])
    }
  }

  return (
    <Layout>
      <MainPresenter
        allPosts={allPosts}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        handleClickItem={handleClickItem}
      />
    </Layout>
  )
}

export default MainContainer
