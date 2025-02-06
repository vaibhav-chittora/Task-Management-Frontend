import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { MdAddCircleOutline } from 'react-icons/md'
import InputModal from '../components/InputModal'
import axiosInstance from '../helpers/axiosInstance'

function AllTasks() {
    const [showModal, setShowModal] = useState('hidden')

    const [data, setData] = useState()
    const userDetails = {
        username: localStorage.getItem('user'),
        email: localStorage.getItem('email'),
        // token: localStorage.getItem('token')
        authorization: localStorage.getItem('token')
    }
    useEffect(() => {
        const fetchUserData = async () => {
            const response = await axiosInstance.get('/task/all-tasks', {
                headers: userDetails
            })
            setData(response.data.data)
            console.log('Tasks from api -', response.data.data);
        }
        fetchUserData()
        console.log("Data - ", data);
    }, [])

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

                <Cards home={'true'} setShowModal={setShowModal} data={data} setData={setData} />
            </div>
            <InputModal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default AllTasks 