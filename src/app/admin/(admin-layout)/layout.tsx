import AntdAdminContainer from '../_components/AntdAdminContainer'

export default function AdminLayout({ children }: any) {
  return (
    <AntdAdminContainer>
      <div>admin layout</div>
      <div>{children}</div>
    </AntdAdminContainer>
  )
}
