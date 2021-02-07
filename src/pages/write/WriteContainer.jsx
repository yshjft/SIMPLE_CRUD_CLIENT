import React, {useRef} from 'react'
import Layout from '../../component/common/Layout'
import WritePresenter from '../../presenters/write'

const WriteContainer = () => {
  const titleRef = useRef(null)
  const titleWarnRef = useRef(null)
  const writerRef = useRef(null)
  const writerWarnRef = useRef(null)
  const contentRef = useRef(null)
  const contentWarnRef = useRef(null)

  function resetWarning(ref, warnRef) {
    ref.current.style.border = '1px solid black'
    warnRef.current.style.display = 'none'
  }

  function handleSubmit(title, writer, content) {
    resetWarning(titleRef, titleWarnRef)
    resetWarning(writerRef, writerWarnRef)
    resetWarning(contentRef, contentWarnRef)

    console.log(title, writer, content)
    // validation
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
