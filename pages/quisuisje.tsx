import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
           <h2>CHEIKH</h2>
           <Link href="/"> index </Link>
           <h2>BTS SIO</h2>

       
    </>
  )
}