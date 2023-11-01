import AntdAdminContainer from '../_components/AntdAdminContainer'

export default function AdminLayout({ children }: any) {
  return (
    <AntdAdminContainer>
      <div>{children}</div>
    </AntdAdminContainer>
  )
}
