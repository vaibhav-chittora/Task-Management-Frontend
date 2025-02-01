import React from 'react'
import Cards from '../components/Cards'
import { MdAddCircleOutline } from 'react-icons/md'

function AllTasks() {
    return (
        <div>
            <div className='w-full flex justify-end px-4 py-2'>
                <button>
                    <MdAddCircleOutline className='text-5xl text-gray-500 hover:text-gray-100 cursor-pointer transition-all duration-300' />

                </button>
            </div>

            <Cards home={'true'} />
        </div>
    )
}

export default AllTasks 