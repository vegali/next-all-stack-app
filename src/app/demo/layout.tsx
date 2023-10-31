export default function demoLayout({ children }: any) {
  return (
    <div className="demo">
      <h2>demo layout</h2>
      <div>{children}</div>
    </div>
  )
}
