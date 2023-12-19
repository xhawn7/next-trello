// 创建json页面
import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    data: {
      name: 'chris'
    }
  })
}
