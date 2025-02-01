import React from 'react'
import { CgNotes } from 'react-icons/cg'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { MdLabelImportant, MdOutlinePendingActions } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Sidebar() {
    const data = [
        {
            title: 'All Tasks',
            icon: <CgNotes />,
            link: '/'

        },
        {
            title: 'Important Tasks',
            icon: <MdLabelImportant />,
            link: '/important-tasks'
        },
        {

            title: 'Completed Tasks',
            icon: <IoCheckmarkDoneOutline />,
            link: '/completed-tasks'
        },
        {
            title: 'Pending Tasks',
            icon: <MdOutlinePendingActions />,
            link: '/pending-tasks'
        }

    ]

    return (
        <div className='flex flex-col'>
            <div>
                <img src="https://www.freepik.com/free-psd/3d-icon-social-media-app_36190320.htm#fromView=keyword&page=1&position=21&uuid=0429c0e9-6ee9-4b79-bcfa-2ed1a4f91619&query=User+Profile" alt="" />
                <h2 className='font-semibold text-xl'>Vaibhav Chittora</h2>
                <h4 className='text-gray-400 mb-1'>vaibhav@admin.com</h4>
                <hr />
            </div>
            <div>
                {data.map((item, i) => (
                    <Link
                        className='my-2 cursor-pointer flex gap-2 items-center hover:bg-gray-700 p-2 rounded transition-all duration-300' key={i}
                        to={item.link}
                    >
                        {item.icon}

                        {item.title}
                    </Link>

                ))}
            </div>

            <button className='bg-gray-600 w-full p-2 rounded '>Logout</button>
        </div>
    )
}

export default Sidebar