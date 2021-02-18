import React, {useRef} from 'react'
import Layout from '../../component/common/Layout'
import WritePresenter from '../../presenters/write'
import {resetWarning, setWarning} from '../../lib/warning'
import {validateRequired} from '../../lib/validatior'
import {postPosts} from '../../api/post'

const WriteContainer = (props) => {
  const {history} = props
  const titleRef = useRef(null)
  const titleWarnRef = useRef(null)
  const writerRef = useRef(null)
  const writerWarnRef = useRef(null)
  const contentRef = useRef(null)
  const contentWarnRef = useRef(null)

  async function handleImageUpload(event) {
    if (event.target.files !== null) {
      const formData = new FormData()
      console.log(formData)
      console.log(event.target.files[0])
    }
  }

  async function handleSubmit(title, writer, content) {
    resetWarning(titleRef, titleWarnRef)
    resetWarning(writerRef, writerWarnRef)
    resetWarning(contentRef, contentWarnRef)

    if (!validateRequired(title) || !validateRequired(writer) || !validateRequired(content)) {
      if (!validateRequired(title)) setWarning(titleRef, titleWarnRef)
      if (!validateRequired(writer)) setWarning(writerRef, writerWarnRef)
      if (!validateRequired(content)) setWarning(contentRef, contentWarnRef)
      return
    }

    try {
      await postPosts({title, writer, content})
      history.push('/')
    } catch (error) {
      alert('failed')
    }
  }

  return (
    <Layout>
      <WritePresenter
        ref={{titleRef, titleWarnRef, writerRef, writerWarnRef, contentRef, contentWarnRef}}
        handleImageUpload={handleImageUpload}
        handleSubmit={handleSubmit}
      />
    </Layout>
  )
}

export default WriteContainer
