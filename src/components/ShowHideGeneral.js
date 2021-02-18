import React from 'react'
import GenForm from './GenForm'

function ShowHideGeneral(props) {
  const { hidden } = props
  let message
  if (hidden){
    message = ""
  } else {
    message = <GenForm />
  }
  return message
}

export default ShowHideGeneral
