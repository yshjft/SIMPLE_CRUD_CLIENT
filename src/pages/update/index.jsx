import React from 'react'
import UpdateContainer from './UpdateContainer'

const UpdatePage = (props) => {
  const {history, match} = props
  return <UpdateContainer id={match.params.id} history={history} />
}

export default UpdatePage
