// 本页面可无视，为了展示如何获取登陆信息而做

import { auth, currentUser, UserButton } from '@clerk/nextjs'

// const page = async () => {
// const user = await currentUser()
// const { userId } = auth()
const page = () => {
  return (
    <div>
      {/* user:{user?.firstName}
      id:{userId} */}
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default page
