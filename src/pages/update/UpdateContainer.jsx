import React, {useEffect, useState, useRef} from 'react'
import Layout from '../../component/common/Layout'
import UpdatePresenter from '../../presenters/update'
import {resetWarning, setWarning} from '../../lib/warning'
import {validateRequired} from '../../lib/validatior'
import {getPostWithId, putPosts} from '../../api/post'

const UpdateContainer = (props) => {
  const {id, history} = props
  const [imageUrl, setImageUrl] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedImageUrl, setSelectedImageUrl] = useState(null)
  const titleRef = useRef(null)
  const titleWarnRef = useRef(null)
  const writerRef = useRef(null)
  const writerWarnRef = useRef(null)
  const contentRef = useRef(null)
  const contentWarnRef = useRef(null)
  const uploadRef = useRef(null)
  const [record, setRecord] = useState({
    title: '',
    writer: '',
    content: ''
  })

  useEffect(() => {
    if (!id) return
    ;(async () => {
      try {
        const recordForEdit = await getPostWithId(id)
        if (recordForEdit.imageUrl) {
          setImageUrl(recordForEdit.imageUrl)
          setSelectedImageUrl(recordForEdit.imageUrl)
        }
        setRecord(recordForEdit)
      } catch (error) {
        setRecord({
          title: '',
          writer: '',
          content: ''
        })
      }
    })()
  }, [id])

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
      formData.append('imageUrl', imageUrl)
      formData.append('file', selectedFile)

      await putPosts(id, formData)
      history.push(`/post/${id}`)
    } catch (error) {
      alert('fail')
    }
  }
  return (
    <Layout>
      <UpdatePresenter
        ref={{titleRef, titleWarnRef, writerRef, writerWarnRef, contentRef, contentWarnRef, uploadRef}}
        record={record}
        imageUrl={selectedImageUrl}
        handleImageUpload={handleImageUpload}
        handleRemoveImage={handleRemoveImage}
        handleSubmit={handleSubmit}
      />
    </Layout>
  )
}

export default UpdateContainer
