import React, {useState, forwardRef} from 'react'
import '../../styles/index.scss'

const InputForPost = forwardRef((props, ref) => {
  const {handleSubmit} = props
  const [title, setTitle] = useState()
  const [writer, setWriter] = useState()
  const [content, setContent] = useState()
  const {titleRef, titleWarnRef, writerRef, writerWarnRef, contentRef, contentWarnRef} = ref

  function handleChange(e, type) {
    const changedValue = e.target.value
    switch (type) {
      case 'title':
        setTitle(changedValue)
        break
      case 'writer':
        setWriter(changedValue)
        break
      case 'content':
        setContent(changedValue)
        break
      default:
        break
    }
  }

  return (
    <div className="inputArea">
      <div className="title">WRITE</div>
      <div className="inputItem">
        <input ref={titleRef} name="title" placeholder="제목" onChange={(e) => handleChange(e, 'title')} />
        <div ref={titleWarnRef} className="warning">
          입력 미완료
        </div>
      </div>
      <div className="inputItem">
        <input ref={writerRef} name="writer" placeholder="작성자" onChange={(e) => handleChange(e, 'writer')} />
        <div ref={writerWarnRef} className="warning">
          입력 미완료
        </div>
      </div>
      <div className="inputItem">
        <textarea
          ref={contentRef}
          name="content"
          placeholder="내용 작성"
          onChange={(e) => handleChange(e, 'content')}
        />
        <div ref={contentWarnRef} className="warning">
          입력 미완료
        </div>
      </div>
      <button type="submit" onClick={() => handleSubmit(title, writer, content)}>
        SUBMIT
      </button>
    </div>
  )
})

export default InputForPost
