'use client'
import { DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Modal, Popconfirm, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import MyUpload from '../../_components/MyUpload'

type Article = {
  id: string
  title: string
  desc: string
}

export default function ArticlePage() {
  const [open, setOpen] = useState(false)
  const [myForm] = Form.useForm()
  const [list, setList] = useState<Article[]>([])
  const [query, setQuery] = useState({ page: 1, size: 10, title: '' })
  const [curId, setCurId] = useState('')
  const [total, setTotal] = useState(1)
  const [imageUrl, setImageUrl] = useState<string>('')

  // 监听新建、编辑弹层关闭
  useEffect(() => {
    if (!open) {
      // setCurId('')
      // setImageUrl('')
      myForm.resetFields()
    }
  }, [open])

  // 监听查询条件改变
  useEffect(() => {
    fetch(`/api/admin/article?page=${query.page}&size=${query.size}&title=${query.title}`, { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        setList(res.data.list)
        setTotal(res.total)
      })
  }, [query])

  return (
    <Card
      extra={
        <Button
          icon={
            <PlusOutlined
              onClick={() => {
                console.log(open)

                setOpen(true)
              }}
            />
          }
          type="primary"
        ></Button>
      }
    >
      <Form
        layout="inline"
        onFinish={v => {
          setQuery({ ...query, page: 1, title: v.title })
          setTotal(1)
        }}
      >
        <Form.Item label="标题" name="title">
          <Input placeholder="请输入关键词" />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} htmlType="submit" type="primary" />
        </Form.Item>
      </Form>
      <Table
        pagination={{
          total,
          onChange(page) {
            setQuery({ ...query, page })
          }
        }}
        className="mt-8"
        dataSource={list}
        rowKey="id"
        columns={[
          {
            title: '序号',
            width: 80,
            render(v, r, i) {
              return i + 1
            }
          },
          { title: '标题', dataIndex: 'title' },
          { title: '简介', dataIndex: 'desc' },
          {
            title: '封面',
            render(data) {
              return data.image && <img src={data.image} style={{ width: '80px', height: '80px' }} alt="" />
            }
          },
          {
            title: '操作',
            render(data) {
              return (
                <Space>
                  <Button
                    size="small"
                    icon={<EditOutlined />}
                    type="primary"
                    onClick={() => {
                      setOpen(true)
                      setCurId(data.id)
                      myForm.setFieldValue('title', data.title)
                      myForm.setFieldValue('desc', data.desc)
                      setImageUrl(data.image)
                    }}
                  />
                  <Popconfirm
                    title="确认删除？"
                    onConfirm={async () => {
                      const res = await fetch('/api/admin/article/' + data.id, {
                        method: 'DELETE'
                      }).then(res => res.json())
                      setQuery(query)
                      console.log(res)
                    }}
                  >
                    <Button size="small" icon={<DeleteOutlined />} type="primary" danger />
                  </Popconfirm>
                </Space>
              )
            }
          }
        ]}
      ></Table>
      <Modal
        title="编辑"
        open={open}
        onCancel={() => {
          setOpen(false)
        }}
        onOk={() => {
          myForm.submit()
        }}
        destroyOnClose={true}
        maskClosable={true}
      >
        <Form
          preserve={false} // 与modal 结合使用，关闭销毁
          layout="vertical"
          form={myForm}
          onFinish={async v => {
            if (curId) {
              await fetch(`/api/admin/article/${curId}`, {
                method: 'PUT',
                body: JSON.stringify({ ...v, image: imageUrl })
              }).then(res => res.json())
            } else {
              console.log('create')

              await fetch('/api/admin/article', {
                method: 'POST',
                body: JSON.stringify({ ...v, image: imageUrl })
              }).then(res => res.json())
            }
            setOpen(false)
            setQuery({ ...query })
          }}
        >
          <Form.Item label="标题" name="title" rules={[{ required: true, message: '标题不能为空' }]}>
            <Input placeholder="请输入标题" />
          </Form.Item>
          <Form.Item label="简介" name="desc">
            <Input.TextArea placeholder="请输入简介" />
          </Form.Item>
          {imageUrl}
          <Form.Item label="封面" name="image">
            <MyUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  )
}
