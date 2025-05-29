import { ReactNode } from 'react'

const Hoc = (comp:ReactNode,comp2:ReactNode,whichone:boolean) => {
    return function () {
 
return whichone ? comp : comp2
    }
}

export default Hoc
