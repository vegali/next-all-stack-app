'use client'
import { Card } from 'antd'
export default function PageContainer({ children, title }: any) {
  return <Card title={title}>{children}</Card>
}
