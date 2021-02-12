import React, {useEffect, useState, useRef} from 'react'
import Layout from '../../component/common/Layout'
import UpdatePresenter from '../../presenters/update'
import {resetWarning, setWarning} from '../../lib/warning'
import {validateRequired} from '../../lib/validatior'
import {getPostWithId, putPosts} from '../../api/post'

const tmpRecord = {
  title: '안녕하세요!!',
  date: '2021.02.08',
  writer: '개발자',
  content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.\n\n\n The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\n뭐지 이건`
}

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
