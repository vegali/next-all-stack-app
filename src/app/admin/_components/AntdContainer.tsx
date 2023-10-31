import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import type { AppProps } from 'next/app'
import 'antd/dist/reset.css'

export default function AntdContainer({ children }: any) {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
}
