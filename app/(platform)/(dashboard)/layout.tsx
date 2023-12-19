import React from 'react'
import { Navbar } from './_components/navbar'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default layout
