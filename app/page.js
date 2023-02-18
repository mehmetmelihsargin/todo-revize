import Image from 'next/image';
import { Inter } from '@next/font/google';
import Board from '@/components/Board';
import Logo from '@/public/logo';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.classname} flex flex-col justify-evenly items-center h-screen`} style={{ background: "linear-gradient(116.82deg, #85A1BA 0%, #194591 65.92%)" }} >
      <Logo />
      <Board />
    </main>
  )
}
