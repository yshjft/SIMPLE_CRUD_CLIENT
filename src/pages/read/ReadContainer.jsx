import React, {useEffect, useState} from 'react'
import Layout from '../../component/common/Layout'
import ReadPresenter from '../../presenters/read'
import {getPostWithId, deletePostWithId} from '../../api/post'

const ReadContainer = (props) => {
  const {id, history} = props
  const [post, setPost] = useState({
    title: '',
    createdAt: '',
    writer: '',
    content: ''
  })

  useEffect(() => {
    ;(async () => {
      const postDetail = await getPostWithId(id)
      setPost(postDetail)
    })()
  }, [id])

  function moveToUpdate() {
    history.push(`/update/${id}`)
  }

  async function deletePost() {
    try {
      await deletePostWithId(id)
      history.push('/')
    } catch (error) {
      alert('fail')
    }
  }

  return (
    <Layout>
      <ReadPresenter post={post} moveToUpdate={moveToUpdate} deletePost={deletePost} />
    </Layout>
  )
}

export default ReadContainer
