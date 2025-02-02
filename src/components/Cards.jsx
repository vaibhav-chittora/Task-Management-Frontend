import React, { useState } from 'react'
import { FaRegEdit, FaRegHeart } from 'react-icons/fa'
import { MdAddCircleOutline, MdOutlineDelete } from 'react-icons/md'

function Cards({ home, setShowModal }) {

    const data = [
        {
            "title": "Design Homepage",
            "description": "Create the layout and UI components for the homepage.",
            status: "Pending"
        },
        {
            "title": "Set Up Database",
            "description": "Configure MongoDB and set up collections for tasks.",
            status: "Completed"
        },
        {
            "title": "Implement Authentication",
            "description": "Add login and signup functionality with JWT authentication.",
            status: "Pending"
        },
        {
            "title": "Create Task API",
            "description": "Develop REST API endpoints for CRUD operations on tasks.",
            status: "Pending"
        },
        {
            "title": "Testing and Debugging",
            "description": "Perform unit and integration testing to ensure functionality.",
            status: "Completed"
        }
    ]



    return (
        <div className='grid grid-cols-4 gap-6 p-4'>
            {data && data.map((item, i) => (
                <div className='flex flex-col justify-between bg-gray-700 rounded-lg p-4' >

                    <div className=''>
                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                        <p className='text-gray-300 my-2'>{item.description}</p>
                    </div>
                    <div className='flex items-center mt-4 '>

                        <button
                            className={`${item.status === "Pending" ? "bg-red-500" : "bg-green-500"} rounded px-2 py-1 w-3/6 cursor-pointer`}

                        >
                            {item.status}
                        </button>


                        <div className='w-3/6 flex justify-around items-center text-2xl'>
                            <button>
                                <FaRegHeart />
                            </button>
                            <button>
                                <FaRegEdit />
                            </button>
                            <button>
                                <MdOutlineDelete />
                            </button>
                        </div>


                    </div>
                </div>
            ))}
            {
                home === "true" &&
                <div
                    className='flex flex-col justify-center items-center bg-gray-700 text-gray-300 rounded-lg p-4 cursor-pointer hover:scale-105 transition-all duration-300'
                    onClick={() => setShowModal('fixed')}
                >
                    <MdAddCircleOutline className='text-5xl' />
                    <h3 className='text-2xl mt-4'>Add more tasks</h3>

                </div>
            }
        </div>
    )
}

export default Cards