import { Metadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: any
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  return { title: `这是详情页${params.id}` }
}

export default function listPage({ params }: Props) {
  console.log(params.id)

  return (
    <div>
      <h4>list id</h4>
      <div>{params.id}</div>
    </div>
  )
}
