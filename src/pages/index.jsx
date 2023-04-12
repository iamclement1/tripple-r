import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Client, Navbar, Products, Team } from '@/components/layouts'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>

      <main className='my-14'>
        <Team />
      </main>

      <main className='my-14'>
        <Client />
      </main>

      <main className='my-14'>
        <Products />
      </main>
    </React.Fragment>
  )
}
