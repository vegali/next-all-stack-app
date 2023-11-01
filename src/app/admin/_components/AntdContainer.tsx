'use client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import type { AppProps } from 'next/app'
import 'antd/dist/reset.css'
import { useEffect, useState } from 'react'

export default function AntdContainer({ children }: any) {
  // 解决样式闪烁问题
  const [done, setDone] = useState(false)
  useEffect(() => {
    setDone(true)
  }, [])

  if (!done) {
    return null
  }
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
}
