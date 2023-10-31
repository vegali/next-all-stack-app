'use client'
import { link } from 'fs'
import { useEffect, useState } from 'react'

type Item = {
  id: number
  name: string
}

export default function GoodsPage() {
  const [data, setData] = useState<Item[]>([])
  useEffect(() => {
    fetch('/api/goods')
      .then(res => res.json())
      .then(res => {
        console.log(res)

        setData(res.data)
      })
  }, [])

  return (
    <div>
      <ul>
        {data &&
          data.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}

        {data && <li>no data</li>}
      </ul>
    </div>
  )
}
