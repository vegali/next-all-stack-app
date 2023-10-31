import AntdContainer from './_components/AntdContainer'

export default function AdminLayout({ children }: any) {
  return (
    <AntdContainer>
      <div>admin layout</div>
      <div>{children}</div>
    </AntdContainer>
  )
}
