import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { Bidule } from '@/components/Bidule';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
          <Bidule titre="Bonjour"/>
           <h2>CHEIKH1</h2>
           <Link href="/"> index </Link>
           <h2>BTS SIO</h2>

       
    </>
  )
}