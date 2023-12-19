import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>这是一个layout</div>
      <div>{children}</div>
    </>
  )
}

export default layout
