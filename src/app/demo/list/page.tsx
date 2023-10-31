import { Metadata } from 'next'
import List from './_components/List'

export const metadata: Metadata = {
  title: 'test title',
  description: ' test description'
}

export default function listPage() {
  return (
    <div>
      <List />
    </div>
  )
}
