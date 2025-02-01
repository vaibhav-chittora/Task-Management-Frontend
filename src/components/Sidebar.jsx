import React from 'react'

function Sidebar() {
    const data = [
        {
            title: 'All Tasks',

        },
        {
            title: 'Important Tasks',
        },
        {

            title: 'Completed Tasks',
        },
        {
            title: 'Pending Tasks',
        }

    ]

    return (
        <div className='flex flex-col bg-orange-300'>
            <div>
                <img src="https://www.freepik.com/free-psd/3d-icon-social-media-app_36190320.htm#fromView=keyword&page=1&position=21&uuid=0429c0e9-6ee9-4b79-bcfa-2ed1a4f91619&query=User+Profile" alt="" />
                <h2 className='font-semibold text-xl'>Vaibhav Chittora</h2>
                <h4 className='text-gray-400 mb-1'>vaibhav@admin.com</h4>
                <hr />
            </div>
            <div>
                {data.map((item, i) => (
                    <div className='my-2'>{item.title}</div>
                ))}
            </div>

            <button className='bg-gray-600 w-full p-2 rounded'>Logout</button>
        </div>
    )
}

export default Sidebar