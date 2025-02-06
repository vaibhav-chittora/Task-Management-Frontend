import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axiosInstance from '../helpers/axiosInstance'

function PendingTasks() {

    const [data, setData] = useState()
    const userDetails = {
        username: localStorage.getItem('user'),
        email: localStorage.getItem('email'),
        // token: localStorage.getItem('token')
        authorization: localStorage.getItem('token')
    }

    useEffect(() => {
        const fetchImportantTasks = async () => {
            const response = await axiosInstance.get('/task/pending-tasks', {
                headers: userDetails
            })
            setData(response.data.data)
            console.log('Important Tasks from api -', response.data.data);
        }
        fetchImportantTasks()
        console.log("Data - ", data);
    }, [])

    return (
        <div>
            <Cards home={'false'} data={data} />
        </div>
    )
}

export default PendingTasks