import { Inter } from '@next/font/google';
import Board from '@/components/Board';
import Logo from '@/public/logo';
import { MyProvider } from "../context/Context";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MyProvider>
      <main className={`${inter.classname} bg-gradient-to-br from-[#85A1BA] to-[#194591] flex flex-col justify-evenly items-center h-screen`} >
        <Logo />
        <Board />
      </main>
    </MyProvider>
  )
}
