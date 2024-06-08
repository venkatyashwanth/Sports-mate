import React from 'react'
import Image from 'next/image';
import { HiMiniRocketLaunch,HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";


const Header = () => {
    return (
        <>
            <div className='p-2 border-b-2 border-b-red-300'>
                <div className='flex justify-between items-center  w-content my-0 mx-auto max-w-[1400px]'>
                    <div>
                        <Image width={160} height={0} src="/images/logo.png" alt="image" />
                    </div>
                    <div className='flex items-center gap-2 ml-3'>
                        <a href="#0" className='bg-black text-white p-2 px-2 sm:px-4 rounded-full text-center'>
                            <span className='hidden sm:block'>create post</span>
                            <HiMiniRocketLaunch className='sm:hidden'/>
                        </a>
                        <a href="#0" className='bg-white text-black p-2 px-2 sm:px-4 rounded-full border-2 border-slate-100 text-center'>
                            <span className='hidden sm:block'>sign in</span>
                            <HiMiniArrowLeftStartOnRectangle className='sm:hidden'/>
                        </a>
                        <div className='rounded-full overflow-hidden shadow-sm shadow-amber-50'>
                            <Image width={50} height={50} src="https://i.pravatar.cc/150?img=7" alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header