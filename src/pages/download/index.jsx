import React from 'react'
import Navbar from '../../components/navbar'
import Playstore from '../../images/Googleplay.svg'
import Appstore from '../../images/Appstore.svg'
import { Navbg } from '../../components/navbar/NavStyles'

const Download = () => {
  return (
    <div>
        <Navbar/>
        <Navbg/>
        <div className='w-full h-auto bg-primary items-center '>
          <div className='flex flex-col gap-20 pt-40 md:pt-60 pb-60 justify-center items-center px-5'>
            <div className='justify-center flex text-black text-lg md:text-3xl w-full md:w-3/5 items-center text-center'>Join us today and discover a comprehensive financial solution tailored to your specific requirements.</div>
            <div className='flex gap-5 justify-center'>
            <a href='https://play.google.com/store/apps/details?id=com.nearpays.nearpays' target='blank'><img src={Playstore} alt='' className=''/></a>
            <a href='https://apps.apple.com/ng/app/nearpays/id6446233465' target='blank'><img src={Appstore} alt='' className=''/></a>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Download