'use client'
import { Button, Form, Input, Table } from 'antd'
import PageContainer from '../../_components/PageContainer'
import { SearchOutlined } from '@ant-design/icons'

export default function UsersPage() {
  return (
    <PageContainer title="用户信息">
      <Form layout="inline">
        <Form.Item label="用户名">
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} type="primary" />
        </Form.Item>
      </Form>
      <Table className="mt-4" columns={[{ title: '序号' }, { title: '名字' }, { title: '昵称' }, { title: '手机号' }, { title: '头像' }, { title: '操作' }]} />
    </PageContainer>
  )
}
