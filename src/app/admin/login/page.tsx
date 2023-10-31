'use client'
import { Card, Form, Button, Input } from 'antd'

export default function LoginPage() {
  return (
    <div className="login-form pt-20">
      <Card title="Next Login" className="w-4/5 mx-auto">
        <Form
          labelCol={{ span: 3 }}
          onFinish={v => {
            console.log(v)
          }}
        >
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名"></Input>
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password placeholder="请输入密码"></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
