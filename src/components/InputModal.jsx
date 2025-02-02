import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'

function InputModal({ showModal, setShowModal }) {

    // const [showModal, setShowModal] = useState('hidden')
    return (
        <>
            <div className={`${showModal} top-0 left-0 bg-gray-600 opacity-50 h-screen w-full`}></div>
            <div className={`${showModal} top-0 left-0 flex items-center justify-center h-screen w-full`}>
                <div className='w-3/6 border border-gray-100 bg-slate-800 p-4 rounded-lg'>
                    <div className='flex justify-end items-center'>
                        <button
                            className='text-gray-500 hover:text-gray-300 transition-all duration-300'
                            onClick={() => setShowModal('hidden')}
                        >

                            <MdOutlineClose
                                className='text-2xl text-gray-500 hover:cursor-pointer hover:text-gray-300 transition-all duration-300'

                            />
                        </button>
                    </div>
                    <h1 className='text-white text-center text-3xl font-bold my-6'>Add New Task</h1>
                    <input
                        className='w-full bg-slate-700 p-2 rounded-md mb-2'
                        type="text"
                        placeholder='Title'
                        name='title'
                    />
                    <textarea
                        className='w-full bg-slate-700 p-2 rounded-md my-3'
                        placeholder='Enter your tasks description here.'
                        rows="4"
                        cols="50"
                    >

                    </textarea>
                    <button className='bg-blue-500 text-2xl px-3 py-2 rounded-md my-3 '>
                        Create
                    </button>
                </div>
            </div>

        </>
    )
}

export default InputModal