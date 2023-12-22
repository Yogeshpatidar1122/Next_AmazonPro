// import React from 'react'
import Container from './Container'
import { PcCase, ScanFace, Smartphone, WatchIcon } from 'lucide-react'
import Link from 'next/link'
import { getProducts } from '@/app/helpers'
import ProductCard from './ProductCard'

const Products = async() => {
  const products = await getProducts();
  // console.log(Products);
  
  return (
    <div className='mt-20 '>
      <Container>
      <div className='flex flex-col gap-2 items-center'>

        <h2 className='text-xl font-semibold'>Choose The Category.</h2>
        <p className='text-lg items-center'>Explore amazing collection of the products.</p>
      </div>
      {/* category icons  */}
        <div className="text-zinc-500 flex justify-center items-center gap-2 md:gap-6 mt-5">
        <Link href={'/phones'} className='flex gap-2 hover:cursor-pointer hover:text-yellow-500 duration-200'>
        <Smartphone/>
        <p>Phones</p>
        </Link>
        <div className='h-7 w-[1px] bg-yellow-400 inline-flex'/>
        <Link href={'/watches'} className='flex gap-2 hover:cursor-pointer hover:text-yellow-500 duration-200'>
        <WatchIcon/>
        <p>Watches</p>
        </Link>
        <div className='h-7 w-[1px] bg-yellow-400 inline-flex'/>
        <Link href={'/phonecases'} className='flex gap-2 hover:cursor-pointer hover:text-yellow-500 duration-200'>
        <PcCase/>
        <p>PhoneCases</p>
        </Link>
        <div className='h-7 w-[1px] bg-yellow-400 inline-flex'/>
        <Link href={'/phones'} className='flex gap-2 hover:cursor-pointer hover:text-yellow-500 duration-200'>
        <ScanFace/>
        <p>Accessories</p>
        </Link>
        <div className='h-7 w-[1px] bg-yellow-400 inline-flex'/>
        </div>
        <ProductCard products={products}/>
      </Container>
    </div>
  )
}

export default Products
