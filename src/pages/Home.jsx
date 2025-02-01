import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div className='flex gap-4 h-[98vh]'>
            <div className='w-1/6 border border-grey rounded-xl p-4'>
                <Sidebar />
            </div>
            <div className='w-5/6 border border-grey rounded-xl p-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default Home