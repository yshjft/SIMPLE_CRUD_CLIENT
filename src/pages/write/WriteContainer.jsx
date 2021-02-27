import React, {useRef, useState} from 'react'
import Layout from '../../component/common/Layout'
import WritePresenter from '../../presenters/write'
import {resetWarning, setWarning} from '../../lib/warning'
import {validateRequired} from '../../lib/validatior'
import {postPosts} from '../../api/post'

const WriteContainer = (props) => {
  const {history} = props
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedImageUrl, setSelectedImageUrl] = useState(null)
  const titleRef = useRef(null)
  const titleWarnRef = useRef(null)
  const writerRef = useRef(null)
  const writerWarnRef = useRef(null)
  const contentRef = useRef(null)
  const contentWarnRef = useRef(null)
  const uploadRef = useRef(null)

  function handleImageUpload(input) {
    if (input.target.files !== null) {
      const reader = new FileReader()

      reader.onload = (event) => {
        setSelectedImageUrl(event.target.result)
      }
      if (!input.target.files[0]) {
        setSelectedImageUrl(null)
        return
      }
      reader.readAsDataURL(input.target.files[0])
      setSelectedFile(input.target.files[0])
    }
  }

  function handleRemoveImage() {
    uploadRef.current.value = ''
    setSelectedFile(null)
    setSelectedImageUrl(null)
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
      const formData = new FormData()
      formData.append('title', title)
      formData.append('writer', writer)
      formData.append('content', content)
      formData.append('file', selectedFile)
      await postPosts(formData)
      history.push('/')
    } catch (error) {
      alert('failed')
    }
  }

  return (
    <Layout>
      <WritePresenter
        ref={{titleRef, titleWarnRef, writerRef, writerWarnRef, contentRef, contentWarnRef, uploadRef}}
        imageUrl={selectedImageUrl}
        handleImageUpload={handleImageUpload}
        handleRemoveImage={handleRemoveImage}
        handleSubmit={handleSubmit}
      />
    </Layout>
  )
}

export default WriteContainer
