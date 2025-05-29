import React from 'react'

const Contact = ({message}:{message:string}) => {
console.log('working');

  if(message){
    return (
      <h1>{message}</h1>
    )
  }
  return (
    <div>
      Contact  : <span>{message}</span>
    </div>
  )
}

export default Contact
