import React from 'react'
import Sidebar from '../components/Sidebar'

function Home() {
    return (
        <div className='flex gap-4 h-[98vh]'>
            <div className='w-1/6 border border-grey rounded-xl p-4'>
                <Sidebar />
            </div>
            <div className='w-5/6 border border-grey rounded-xl p-4'> Hello from 2nd div </div>
        </div>
    )
}

export default Home