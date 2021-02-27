import React, {forwardRef} from 'react'
import InputArea from '../../component/InputArea/InputArea'

const UpdatePresenter = forwardRef((props, ref) => {
  const {record, imageUrl, handleSubmit, handleRemoveImage, handleImageUpload} = props
  return (
    <div>
      <InputArea
        ref={ref}
        record={record}
        imageUrl={imageUrl}
        handleSubmit={handleSubmit}
        handleRemoveImage={handleRemoveImage}
        handleImageUpload={handleImageUpload}
      />
    </div>
  )
})

export default UpdatePresenter
