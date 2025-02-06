import React, { useState } from 'react'
import { FaHeart, FaRegEdit, FaRegHeart } from 'react-icons/fa'
import { MdAddCircleOutline, MdOutlineDelete } from 'react-icons/md'
import axiosInstance from '../helpers/axiosInstance'

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


    //complete task funcctionality
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
            alert(`Task status updated to ${updatedStatus}`);

        } catch (error) {
            console.log("Error - ", error);
            alert('Error in completing task')

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
            alert(`Task marked as ${updatedStatus ? 'Important' : 'Not Important'}`);

        } catch (error) {
            console.log("Error in marking task as important", error);
            alert('Error marking task as important');
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
            alert('Task deleted successfully');
        } catch (error) {
            console.log("Error in deleting task - ", error);
            alert('Error in deleting task');
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
    }

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
                            className={`${item.status === "pending" ? "bg-red-500" : "bg-green-500"} rounded px - 2 py-1 w-3/6 cursor-pointer`}
                            onClick={() => handleCompleteTask(item._id, item)}
                        >
                            {/* {item.status === 'pending' ? 'Pending' : 'Completed'} */}
                            {item.status === "pending" ? "Pending" : "Completed"}
                        </button>


                        <div className='w-3/6 flex justify-around items-center text-2xl'>
                            <button className='cursor-pointer'
                                onClick={() => handleImportantTasks(item._id, item)}
                            >
                                {item.important == false ? <FaRegHeart /> : <FaHeart className='text-red-500' />}
                            </button>
                            <button
                                className='cursor-pointer'
                                onClick={() => handleEditTask(item._id, item)}
                            >
                                <FaRegEdit />
                            </button>
                            <button
                                className='cursor-pointer'
                                onClick={() => deleteTask(item._id)}
                            >
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