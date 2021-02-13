import React, {useEffect, useState, useRef} from 'react'
import Layout from '../../component/common/Layout'
import UpdatePresenter from '../../presenters/update'
import {resetWarning, setWarning} from '../../lib/warning'
import {validateRequired} from '../../lib/validatior'
import {getPostWithId, putPosts} from '../../api/post'

const UpdateContainer = (props) => {
  const {id, history} = props

  const titleRef = useRef(null)
  const titleWarnRef = useRef(null)
  const writerRef = useRef(null)
  const writerWarnRef = useRef(null)
  const contentRef = useRef(null)
  const contentWarnRef = useRef(null)
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
      await putPosts(id, {title, writer, content})
      history.push(`/post/${id}`)
    } catch (error) {
      alert('fail')
    }
  }
  return (
    <Layout>
      <UpdatePresenter
        ref={{titleRef, titleWarnRef, writerRef, writerWarnRef, contentRef, contentWarnRef}}
        record={record}
        handleSubmit={handleSubmit}
      />
    </Layout>
  )
}

export default UpdateContainer
