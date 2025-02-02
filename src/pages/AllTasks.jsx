import React, { useState } from 'react'
import Cards from '../components/Cards'
import { MdAddCircleOutline } from 'react-icons/md'
import InputModal from '../components/InputModal'

function AllTasks() {
    const [showModal, setShowModal] = useState('hidden')
    return (
        <>
            <div>
                <div className='w-full flex justify-end px-4 py-2'>
                    <button>
                        <MdAddCircleOutline
                            className='text-5xl text-gray-500 hover:text-gray-100 cursor-pointer transition-all duration-300'
                            onClick={() => setShowModal('fixed')}
                        />

                    </button>
                </div>

                <Cards home={'true'} setShowModal={setShowModal} />
            </div>
            <InputModal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default AllTasks 