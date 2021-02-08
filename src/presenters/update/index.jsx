import React, {forwardRef} from 'react'
import InputForPost from '../../component/InputArea/InputArea'

const UpdatePresenter = forwardRef((props, ref) => {
  const {record, handleSubmit} = props
  return (
    <div>
      <InputForPost ref={ref} record={record} handleSubmit={handleSubmit} />
    </div>
  )
})

export default UpdatePresenter
