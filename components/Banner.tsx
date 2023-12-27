"use client";
import React, { useState } from 'react'
import Slider from 'react-slick';
import { sliderOne, sliderTwo, sliderThree } from '@/assets';
import Image from 'next/image';
import { Clock,Smartphone,MailPlus ,Map } from 'lucide-react'

const Banner = () => {
  const [dotActive,setDotActive] =useState(0);
  const changeHandleBefore=(prev:any,next:any) =>{
    setDotActive(next);
  }
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade:true,
    speed: 2000,
    autoplaySpeed: 2000,
    beforeChange:changeHandleBefore,
    appendDots: (dots: any) => (
      <div
      style={{
        position: "absolute",
        top: "68%",
        left: "111%",
        transform: "translate(-50%, 0)",
      }}
    >
      <ul
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 30,
        }}
      >
        {dots}
      </ul>
    </div>
  ),
  customPaging: (i: any) => (
    <div
      style={
        i === dotActive
          ? {
              width: "50px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#fff",
              cursor: "pointer",
            }
          : {
              width: "50px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#131921",
              cursor: "pointer",
            }
      }
    ></div>
  ),
  };
  
  return (
      
    <div className='lg:min-h-screen relative'>

      <Slider {...settings}>
        {/* sliderone image  */}
        <div className='w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative'>
          <div className='w-full lg:w-1/3 hidden lg:inline-block h-full bg-yellow-400 z-0 relative'>
            <Image src={sliderOne} alt="sliderone" className='absolute object-cover right-0 lg:-right-48 lg:h-screen' priority />
          </div>
          <div className='absolute top-1/2 left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex-col items-center gap-5'>
            <p className='text-xl text-center uppercase mb-2'>Get the best product for you.</p>
            <p className='lg:w-96 w-80 text-center text-zinc-900 mb-2'>Browse the best deal on Mobiles, Watches and Accessories</p>
            <p className='text-2xl  text-center font-semibold mb-4'>Mobiles on Demand</p>
            <div className='flex justify-center items-center'>
              <button className=' relative text-base font-medium bg-yellow-500 rounded-md px-3 py-2 hover:bg-blue-500 text-zinc-900 hover:text-white focus:outline-none focus:ring focus:border-blue-300 mx-auto '>
                Select Product
              </button>
            </div>
          </div>
        </div>
        {/* slider two image  */}
        <div className='w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative'>
          <div className='w-full lg:w-1/3 hidden lg:inline-block h-full bg-yellow-400 z-0 relative'>
            <Image src={sliderTwo} alt="slidertwo" className='absolute object-cover right-0 lg:-right-48 lg:h-screen' priority />
          </div>
          <div className='absolute top-1/2 left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex-col items-center gap-5'>
            <p className='text-xl text-center uppercase mb-2'>Get the best product for you.</p>
            <p className='lg:w-96 w-80 text-center text-zinc-900 mb-2'>Browse the best deal on Mobiles, Watches and Accessories</p>
            <p className='text-2xl  text-center font-semibold mb-4'>T-Shirts on Demand</p>
            <div className='flex justify-center items-center'>
              <button className=' relative text-base font-medium bg-yellow-500 rounded-md px-3 py-2 hover:bg-blue-500 text-zinc-900 hover:text-white focus:outline-none focus:ring focus:border-blue-300 mx-auto '>
                Select Product
              </button>
            </div>
          </div>
        </div>
        {/* sliderthree  */}
        <div className='w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative'>
          <div className='w-full lg:w-1/3 hidden lg:inline-block h-full bg-yellow-400 z-0 relative'>
            <Image src={sliderThree} alt="sliderthree" className='absolute object-cover right-0 lg:-right-48 lg:h-screen' priority/>
          </div>
          <div className='absolute top-1/2 left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex-col items-center gap-5'>
            <p className='text-xl text-center uppercase mb-2'>Get the best product for you.</p>
            <p className='lg:w-96 w-80 text-center text-zinc-900 mb-2'>Browse the best deal on Mobiles, Watches and Accessories</p>
            <p className='text-2xl  text-center font-semibold mb-4'>T-Shirts on Demand</p>
            <div className='flex justify-center items-center'>
              <button className=' relative text-base font-medium bg-yellow-500 rounded-md px-3 py-2 hover:bg-blue-500 text-zinc-900 hover:text-white focus:outline-none focus:ring focus:border-blue-300 mx-auto '>
                Select Product
              </button>
            </div>
          </div>
        </div>
      </Slider>
      <div className="h-20 bg-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 hidden lg:inline-flex items-center gap-x-12 p-10 ">
    <div className="flex items-center gap-5 w-60">
      <Clock className="text-yellow-400 w-8 h-8" />
      <div>
        <p>Saturday - Thursday</p>
        <p className="font-semibold">7:00 - 20:00</p>
      </div>
    </div>
    <div className="flex items-center gap-5 w-60">
      <Smartphone className="text-yellow-400 w-8 h-8" />
      <div>
        <p>+9180 0000 0000</p>
        <p className="font-semibold">Order by Phone</p>
      </div>
    </div>
    <div className="flex items-center gap-5 w-60">
      <Map className="text-yellow-400 w-8 h-8" />
      <div>
        <p>Indore, madhya pradesh</p>
        <p className="font-semibold">Address</p>
      </div>
    </div>
    <div className="flex items-center gap-5 w-60">
      <MailPlus className="text-yellow-400 w-8 h-8" />
      <div>
        <p>Get an invoice</p>
        <p className="font-semibold">Email us <span className='text-sm font-light '>AmazonproCare@gmail.com</span></p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Banner
