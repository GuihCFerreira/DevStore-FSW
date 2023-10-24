
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import banner1 from '@/assets/banner_home_1.png'
import banner2 from '@/assets/banner_home_2.png'
import banner3 from '@/assets/banner_home_3.png'
import Categories from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/product-list'



export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where:{
      discountPercent:{
        gt:0
      }
    }
  });

  return <div>
  <Image src={banner1} width={0} height={0} alt='Até 55% de desconto esse mês'
  className='h-auto w-full px-5'
  />
  <div className="mt-8 px-5">
  <Categories/>
  </div>
  <div className='mt-8 '>
    <ProductList products={deals} />
  </div>
  </div>
}
