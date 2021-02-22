import React, {forwardRef} from 'react'
import InputForPost from '../../component/InputArea/InputArea'

const WritePresenter = forwardRef((props, ref) => {
  const {imageUrl, handleSubmit, handleRemoveImage, handleImageUpload} = props

  return (
    <div>
      <InputForPost
        ref={ref}
        imageUrl={imageUrl}
        handleSubmit={handleSubmit}
        handleRemoveImage={handleRemoveImage}
        handleImageUpload={handleImageUpload}
      />
    </div>
  )
})

export default WritePresenter
