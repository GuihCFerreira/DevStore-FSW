
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import banner1 from '@/assets/banner_home_1.png'
import banner2 from '@/assets/banner_home_2.png'
import banner3 from '@/assets/banner_home_3.png'
import Categories from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from '../../components/ui/product-list'
import SectionTitle from '../../components/ui/section-title'
import PromoBanner from './components/promo-banner'



export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where:{
      discountPercent:{
        gt:0
      }
    }
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return <div className='flex flex-col gap-8 py-8'>
  <PromoBanner src={banner1} alt='Até 55% de desconto esse mês' />
  <div className=" px-5">
  <Categories/>
  </div>
  <div >
    <SectionTitle className='font-bold uppercase pl-5 mb-3'>Ofertas</SectionTitle>
    <ProductList products={deals} />
  </div>

  <div className="">
  <PromoBanner src={banner2} alt='Até 55% de desconto em mouses'/>
  </div>

  <div >
    <SectionTitle className='font-bold uppercase pl-5 mb-3'>Teclados</SectionTitle>
    <ProductList products={keyboards} />
  </div>

  <div>
  <PromoBanner src={banner3} alt='Até 55% de desconto em mouses'/>
  </div>

  <div >
    <SectionTitle className='font-bold uppercase pl-5 mb-3'>Mouses</SectionTitle>
    <ProductList products={mouses} />
  </div>

  </div>
}

