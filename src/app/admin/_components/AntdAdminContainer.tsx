'use client'
import { Layout, Menu, Button, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
const { Header, Sider, Content } = Layout
import 'antd/dist/reset.css'
import { useState } from 'react'

export default function AntdAdminContainer({ children }: any) {
  const [collapsed, setCollapsed] = useState(false)
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
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1'
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2'
              },
              {
                key: '3',
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
