'use client'
import { Card, Form, Button, Input } from 'antd'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LoginBtn from '../_components/LoginBtn'

export default function LoginPage() {
  const nav = useRouter()
  const [submitLoading, setSubmitLoading] = useState(false)
  return (
    <div className="login-form pt-20">
      <Card title="Next Login" className="w-4/5 mx-auto">
        <Form
          labelCol={{ span: 3 }}
          onFinish={async v => {
            setSubmitLoading(true)
            const res = await fetch('/api/admin/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(v)
            }).then(res => res.json())
            nav.push('/admin/dashboard')
          }}
        >
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名"></Input>
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password placeholder="请输入密码"></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={submitLoading}>
              登录
            </Button>
          </Form.Item>
        </Form>
        <LoginBtn />
      </Card>
    </div>
  )
}
