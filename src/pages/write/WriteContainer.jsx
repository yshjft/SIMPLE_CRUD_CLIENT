import React, {useRef} from 'react'
import Layout from '../../component/common/Layout'
import WritePresenter from '../../presenters/write'
import {resetWarning, setWarning} from '../../lib/warning'
import {validateRequired} from '../../lib/validatior'

const WriteContainer = () => {
  const titleRef = useRef(null)
  const titleWarnRef = useRef(null)
  const writerRef = useRef(null)
  const writerWarnRef = useRef(null)
  const contentRef = useRef(null)
  const contentWarnRef = useRef(null)

  function handleSubmit(title, writer, content) {
    resetWarning(titleRef, titleWarnRef)
    resetWarning(writerRef, writerWarnRef)
    resetWarning(contentRef, contentWarnRef)

    if (!validateRequired(title) || !validateRequired(writer) || !validateRequired(content)) {
      if (!validateRequired(title)) setWarning(titleRef, titleWarnRef)
      if (!validateRequired(writer)) setWarning(writerRef, writerWarnRef)
      if (!validateRequired(content)) setWarning(contentRef, contentWarnRef)
      return
    }

    // API 호출을 해야한다
    console.log(title, writer, content)
  }

  return (
    <Layout>
      <WritePresenter
        ref={{titleRef, titleWarnRef, writerRef, writerWarnRef, contentRef, contentWarnRef}}
        handleSubmit={handleSubmit}
      />
    </Layout>
  )
}

export default WriteContainer
