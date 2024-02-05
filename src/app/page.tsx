import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-2 justify-center bg-white h-screen text-primary">
        <div className="flex flex-col items-center pb-0 lg:pb-4 py-4 lg:py-8 justify-center w-full lg:w-50 gap-8 lg:gap-16 order-2 lg:order-1">
          <Image className='absolute top-4 left-4 lg:top-8 lg:left-8 min-w-12 lg:min-w-[5%] z-50' src={'/logo.webp'} alt='AI Minds' width={35} height={35} />
          <h1 className='text-5xl lg:text-7xl text-center lg:mx-[10%] font-bold lg:mt-24 text-blue px-4 lg:px-0'>Welcome to <br /> AI Minds!</h1>
          <h3 className='text-2xl lg:text-4xl text-center lg:mx-[20%] px-4 lg:px-0'>India's #1 Quiz by IIT-Kanpur <br /> for Classes 4 to 10</h3>
          <div className="flex items-center justify-center lg:mx-[20%] gap-2 lg:gap-8 w-full px-4 lg:px-8">
            <button className='rounded-md lg:rounded-none p-4 border text-secondary font-bold bg-blue text-sm lg:text-base w-1/2 lg:w-max-content lg:min-w-70'>DOWNLOAD APP</button>
            <button className='rounded-md lg:rounded-none p-4 border font-bold border-border bg-secondary text-sm lg:text-base w-1/2 lg:w-max-content lg:min-w-70'>REGISTER</button>
          </div>

          <div className="flex items-center justify-center py-4 lg:py-8 bg-secondary w-full lg:gap-5">
            <Link href="/terms" className='text-center w-full text-blue font-bold px-4 lg:px-0 text-3xl border-r border-border pe-5 lg:ms-32'>Terms</Link>
            <Link href="/privacy" className='text-center w-full text-blue font-bold px-4 lg:px-0 text-3xl ms-4 lg:ms-0 lg:me-32'>Privacy</Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between bg-secondary-100 lg:bg-secondary w-full lg:w-50 lg:py-8 order-1 lg:order-2">
          <div className='w-full min-h-96 mt-16 lg:mt-none lg:min-h-none h-full lg:h-3/5 relative p-4 lg:p-0 lg:bg-none'>
            <Image className='object-bottom' src={'/product_image.webp'} layout='fill' objectFit='contain' alt='Product' />
          </div>
          <div className='flex items-center justify-center gap-2 lg:gap-8 flex-1 text-center p-4 lg:p-0 bg-secondary lg:bg-none shadow-top lg:shadow-none w-full'>
            <div className='flex flex-col items-center justify-center text-xs lg:text-base'>
              <Image src={'/full_test.webp'} width={200} height={200} objectFit='contain' alt='Full Test' />
              <p className='font-medium'>AI Minds Ultimate <br /> Quiz Combo Pack</p>
            </div>
            <div className='flex flex-col items-center justify-center text-xs lg:text-base'>
              <Image src={'/reasoning_copy.webp'} width={200} height={200} objectFit='contain' alt='Full Test' />
              <p className='font-medium'>AI Minds Reasoning <br /> & Coding Quiz</p>
            </div>
            <div className='flex flex-col items-center justify-center text-xs lg:text-base'>
              <Image src={'/maths_copy.webp'} width={200} height={200} objectFit='contain' alt='Full Test' />
              <p className='font-medium'>AI Minds <br /> Maths Quiz</p>
            </div>
          </div>
        </div>
      </main>
     <footer style={{ textAlign: "center", marginTop: "20px" }}>
          <p>&copy; 2024 Rightsol. All rights reserved.</p>
        </footer>
    </>
  )
}
