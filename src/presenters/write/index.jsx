import React, {forwardRef} from 'react'
import InputForPost from '../../component/InputArea/InputArea'

const WritePresenter = forwardRef((props, ref) => {
  const {handleSubmit} = props

  return (
    <div>
      <InputForPost ref={ref} handleSubmit={handleSubmit} />
    </div>
  )
})

export default WritePresenter
