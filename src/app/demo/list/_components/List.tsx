'use client'

import { useEffect, useState } from 'react'

type Item = {
  id: number
  name: string
}

export default function List() {
  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    fetch('/api/list')
      .then(res => res.json())
      .then(res => setData(res.data))
  }, [])

  return (
    <ul>
      {data &&
        data.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
    </ul>
  )
}
