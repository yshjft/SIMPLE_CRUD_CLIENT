import React, {useState, forwardRef, useEffect} from 'react'
import '../../styles/index.scss'

const InputForPost = forwardRef((props, ref) => {
  const {record, imageUrl, handleSubmit, handleRemoveImage, handleImageUpload} = props
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState('')
  const [content, setContent] = useState('')
  const {titleRef, titleWarnRef, writerRef, writerWarnRef, contentRef, contentWarnRef, uploadRef} = ref

  useEffect(() => {
    if (record) {
      setTitle(record.title)
      setWriter(record.writer)
      setContent(record.content)
    }
  }, [record])

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
      <div className="title"> {record ? 'EDIT' : 'WRITE'}</div>
      <div className="inputItem">
        <input
          ref={titleRef}
          name="title"
          placeholder="제목"
          value={title}
          onChange={(e) => handleChange(e, 'title')}
        />
        <div ref={titleWarnRef} className="warning">
          입력 미완료
        </div>
      </div>
      <div className="inputItem">
        <input
          ref={writerRef}
          name="writer"
          placeholder="작성자"
          value={writer}
          onChange={(e) => handleChange(e, 'writer')}
        />
        <div ref={writerWarnRef} className="warning">
          입력 미완료
        </div>
      </div>
      <div className="inputItem">
        <textarea
          ref={contentRef}
          name="content"
          placeholder="내용 작성"
          value={content}
          onChange={(e) => handleChange(e, 'content')}
        />
        <div ref={contentWarnRef} className="warning">
          입력 미완료
        </div>
      </div>
      <div className="inputItem">
        <input ref={uploadRef} type="file" accept="image/jpeg, image/jpg, image/png" onChange={handleImageUpload} />
        {imageUrl && (
          <div className="showImageArea">
            <div>
              <div>
                <button onClick={handleRemoveImage}>X</button>
              </div>
              <img src={imageUrl} alt="nothing" />
            </div>
          </div>
        )}
      </div>
      <button type="submit" onClick={() => handleSubmit(title, writer, content)} className="submitButton">
        SUBMIT
      </button>
    </div>
  )
})

export default InputForPost
