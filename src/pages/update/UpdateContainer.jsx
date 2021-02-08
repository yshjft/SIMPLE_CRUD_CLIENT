import React, {useRef} from 'react'
import Layout from '../../component/common/Layout'
import UpdatePresenter from '../../presenters/update'
import {resetWarning, setWarning} from '../../lib/warning'
import {validateRequired} from '../../lib/validatior'

const tmpRecord = {
  title: '안녕하세요!!',
  date: '2021.02.08',
  writer: '개발자',
  content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.\n\n\n The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\n뭐지 이건`
}

const UpdateContainer = () => {
  const titleRef = useRef(null)
  const titleWarnRef = useRef(null)
  const writerRef = useRef(null)
  const writerWarnRef = useRef(null)
  const contentRef = useRef(null)
  const contentWarnRef = useRef(null)

  // 기존에 작성된 글을 가져올 때 api를 한번 더 호출할 것인지 OR redux를 사용해볼 것인지 결정해야함

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
      <UpdatePresenter
        ref={{titleRef, titleWarnRef, writerRef, writerWarnRef, contentRef, contentWarnRef}}
        record={tmpRecord}
        handleSubmit={handleSubmit}
      />
    </Layout>
  )
}

export default UpdateContainer
