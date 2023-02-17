import Image from 'next/image';
import { Inter } from '@next/font/google';
import Board from '@/components/Board';
import logo from '../public/logo.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center h-screen' style={{ background: "linear-gradient(116.82deg, #85A1BA 0%, #194591 65.92%)" }} >
      <Image src={logo} />
      <Board />
    </main>
  )
}
