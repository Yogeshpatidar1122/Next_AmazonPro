import { cn } from '@/lib/utils'
import React, { Children } from 'react'

interface props{
    children:React.ReactNode,
    className?:String
}
const Container = ({children,className}:props) => {
  return (
    <div className={cn('py-5 max-w-screen-xl mx-auto xl:px-0',className)}>
      {children}
    </div>
  )
}

export default Container
