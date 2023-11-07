import Image from 'next/image'
import { getServerSession } from 'next-auth'
import LoginBtn from './admin/_components/LoginBtn'

export default async function Home() {
  const session = await getServerSession()
  console.log(session)

  return (
    <>
      getServerSession Result
      {session?.user?.name ? <div>{session?.user?.name}</div> : <div>Not logged in</div>}
      <LoginBtn />
    </>
  )
}
