import React from 'react'

const Hoc = (Comp:React.ComponentType<{message:string}>) => {
    return function getData (props: any ) {
        const message:string =  'this is my message'
 
      return <Comp {...props} message={message} /> 

      }
}

export default Hoc
