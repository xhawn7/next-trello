import { NextResponse } from 'next/server'
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/api/webhook'],
  afterAuth(auth, req) {
    // 用户登陆了但访问了主页,跳到org的主页
    // TODO: BUG,用户登陆了但访问非主页的地址会报404
    if (auth.userId && auth.isPublicRoute) {
      let path = '/select-org'
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`
      }
      const orgSelection = new URL(path, req.url)
      return NextResponse.redirect(orgSelection)
    }
    // 用户没登陆但访问了非主页的url
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }
    // 用户登陆了但没有组织，访问任何url重定向到 /select-org
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== '/select-org') {
      const orgSelection = new URL('/select-org', req.url)
      return NextResponse.redirect(orgSelection)
    }
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
