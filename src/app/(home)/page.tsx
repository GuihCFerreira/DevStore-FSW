"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import banner1 from '@/assets/banner_home_1.png'
import banner2 from '@/assets/banner_home_2.png'
import banner3 from '@/assets/banner_home_3.png'
import Categories from './components/categories'



export default function Home() {
  const {data} =useSession();
  return <div className='p-5'>
  <Image src={banner1} width={0} height={0} alt='Até 55% de desconto esse mês'
  className='h-auto w-full'
  />
  <div className="mt-8">
  <Categories/>
  </div>
  
  </div>
}
