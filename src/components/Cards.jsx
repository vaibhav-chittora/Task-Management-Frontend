import React, { useState } from 'react'
import { FaHeart, FaRegEdit, FaRegHeart } from 'react-icons/fa'
import { MdAddCircleOutline, MdOutlineDelete } from 'react-icons/md'
import axiosInstance from '../helpers/axiosInstance'
import toast from 'react-hot-toast'

function Cards({ home, setShowModal, data, setData, setUpdatedData }) {

    // const data = [
    //     {
    //         "title": "Design Homepage",
    //         "description": "Create the layout and UI components for the homepage.",
    //         status: "Pending"
    //     },
    //     {
    //         "title": "Set Up Database",
    //         "description": "Configure MongoDB and set up collections for tasks.",
    //         status: "Completed"
    //     },
    //     {
    //         "title": "Implement Authentication",
    //         "description": "Add login and signup functionality with JWT authentication.",
    //         status: "Pending"
    //     },
    //     {
    //         "title": "Create Task API",
    //         "description": "Develop REST API endpoints for CRUD operations on tasks.",
    //         status: "Pending"
    //     },
    //     {
    //         "title": "Testing and Debugging",
    //         "description": "Perform unit and integration testing to ensure functionality.",
    //         status: "Completed"
    //     }
    // ]
    const userDetails = {
        username: localStorage.getItem('user'),
        email: localStorage.getItem('email'),
        // token: localStorage.getItem('token')
        authorization: localStorage.getItem('token')
    }


    //complete task functionality
    const handleCompleteTask = async (id, item) => {
        try {
            const updatedStatus = item.status === "pending" ? "completed" : "pending"

            const response = await axiosInstance.put(`task/update-task/status/${id}`, {
                status: updatedStatus
            },
                { headers: userDetails }
            )
            console.log("Task completed - ", response.data.data);
            const updatedTasks = data.map((task) =>
                task._id === id ? { ...task, status: updatedStatus } : task
            );
            setData(updatedTasks);
            console.log("Updated tasks - ", updatedTasks);
            toast.success(`Task status updated to ${updatedStatus}`);

        } catch (error) {
            console.log("Error - ", error);
            toast.error('Error in completing task', error)

        }

    }

    // Important Task functionality
    const handleImportantTasks = async (id, item) => {
        try {
            // Toggle the important field
            const updatedStatus = !item.important;

            // Make the PUT request to the backend
            const response = await axiosInstance.put(`task/update-task/important/${id}`, {
                important: updatedStatus  // Sending updated boolean status
            }, { headers: userDetails });

            // Successfully updated task, update the state
            console.log('Task marked as important:', response.data.data);

            // Update the task data on the frontend (to reflect UI changes)
            const updatedImportantTasks = data.map((task) => (
                task._id === id ? { ...task, important: updatedStatus } : task
            ));

            setData(updatedImportantTasks);  // Set the updated data into the state
            toast.success(`Task marked as ${updatedStatus ? 'Important' : 'Not Important'}`);

        } catch (error) {
            console.log("Error in marking task as important", error);
            toast.error('Error marking task as important', error);
        }
    };


    // Delete Task functionality
    const deleteTask = async (id) => {
        try {
            const response = await axiosInstance.delete(`task/delete-task/${id}`, {
                headers: userDetails
            })
            console.log("Task deleted - ", response.data.data);
            alert('are you sure you want to delete this task?')
            const updatedTasks = data.filter((task) => task._id !== id);
            setData(updatedTasks);
            toast.success('Task deleted successfully');
        } catch (error) {
            console.log("Error in deleting task - ", error);
            toast.error('Error in deleting task', error);
        }
    }


    // Edit Task functionality
    const handleEditTask = async (id, item) => {
        setShowModal('fixed');
        setUpdatedData({
            id: item._id,
            title: item.title,
            description: item.description,
        })
        if (response.status === 200) {
            toast.success('Task updated successfully');
        } else {
            toast.error('Error updating task');
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4'>
            {data && data.map((item, i) => (
                <div key={i} className='flex flex-col justify-between bg-gray-700 rounded-lg p-4'>
                    <h1 className='text-lg font-semibold'>{item.title}</h1>
                    <p className='text-gray-300'>{item.description}</p>
                    <div className='flex items-center mt-4 space-x-2'>
                        <button className={`${item.status === "pending" ? "bg-red-500" : "bg-green-500"} px-4 py-2 rounded w-1/2 cursor-pointer`}
                            onClick={() => handleCompleteTask(item._id, item)}
                        >{item.status}</button>
                        <div className='flex w-1/2 justify-around'>
                            <button className='cursor-pointer text-2xl' onClick={() => handleImportantTasks(item._id, item)}>
                                {item.important ? <FaHeart className='text-red-500' /> : <FaRegHeart />}
                            </button>
                            <button className='cursor-pointer text-2xl' onClick={() => handleEditTask(item._id, item)}><FaRegEdit /></button>
                            <button className='cursor-pointer text-2xl' onClick={() => deleteTask(item._id)}><MdOutlineDelete /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards