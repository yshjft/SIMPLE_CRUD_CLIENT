import React from 'react'
import ReadContainer from './ReadContainer'

const ReadPage = (props) => {
  const {history, match} = props

  return <ReadContainer id={match.params.id} history={history} />
}

export default ReadPage
