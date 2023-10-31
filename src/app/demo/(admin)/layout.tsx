import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h3>admin layout</h3>
      <div>{children}</div>
    </>
  )
}
