import React, {forwardRef} from 'react'
import InputForPost from '../../component/InputArea/InputArea'

const WritePresenter = forwardRef((props, ref) => {
  const {handleSubmit, handleImageUpload} = props

  return (
    <div>
      <InputForPost ref={ref} handleSubmit={handleSubmit} handleImageUpload={handleImageUpload} />
    </div>
  )
})

export default WritePresenter
