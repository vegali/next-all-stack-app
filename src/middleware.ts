import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // 访问的网址是否属于admin开头
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 访问的网址是否登录页面
    if (!request.nextUrl.pathname.startsWith('/admin/login')) {
      // 是否登录过
      if (request.cookies.get('admin-token')) {

      } else {
        // 跳转到登录页面
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
    }
  }


  // return NextResponse.redirect(new URL('/home', request.url))
}