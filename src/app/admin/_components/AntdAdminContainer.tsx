'use client'
import { Layout, Menu, Button, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
const { Header, Sider, Content } = Layout
import 'antd/dist/reset.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AntdAdminContainer({ children }: any) {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <>
      <Layout className="h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/admin/dashboard']}
            onClick={item => {
              console.log(item.key)
              router.push(item.key)
            }}
            items={[
              {
                key: '/admin/dashboard',
                icon: <UserOutlined />,
                label: 'Dashboard'
              },
              {
                key: '/admin/users',
                icon: <VideoCameraOutlined />,
                label: 'Users'
              },
              {
                key: '/admin/login',
                icon: <UploadOutlined />,
                label: 'nav 3'
              }
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
