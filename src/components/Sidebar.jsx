import React, { useEffect, useState } from "react";
import { CgNotes } from "react-icons/cg";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdLabelImportant, MdOutlinePendingActions } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../redux/authSlice";
import axiosInstance from "../helpers/axiosInstance";
import toast from "react-hot-toast";

function Sidebar() {
    const [Data, setData] = useState();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userDetails = {
        username: JSON.parse(localStorage.getItem("user")),
        email: JSON.parse(localStorage.getItem("email")),
        authorization: localStorage.getItem("token"),
        avatar: JSON.parse(localStorage.getItem("avatar")),
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await axiosInstance.get("/task/all-tasks", {
                headers: userDetails,
            });
            setData(response.data.data);
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Logout function
    const handleLogout = () => {
        dispatch(authActions.logout());
        localStorage.clear();
        toast.success("Logged Out Successfully");
        setTimeout(() => navigate("/login"), 2000);
    };

    const menuItems = [
        { title: "All", icon: <CgNotes />, link: "/home/all-tasks" },
        { title: "Important", icon: <MdLabelImportant />, link: "/home/important-tasks" },
        { title: "Completed", icon: <IoCheckmarkDoneOutline />, link: "/home/completed-tasks" },
        { title: "Pending", icon: <MdOutlinePendingActions />, link: "/home/pending-tasks" },
    ];

    return (
        <>
            {/* Sidebar for large screens */}
            {!isMobile ? (
                <div className="flex flex-col h-full text-white p-4 border border-gray-600 rounded-2xl w-64">
                    <div className="text-center border-b border-gray-600 pb-4">
                        {Data && (
                            <>
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center">
                                        <img src={userDetails.avatar} alt="User Avatar" className="w-20 h-20 mx-auto rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center mt-4">

                                        <h2 className="text-xl font-bold">{userDetails.username.toUpperCase()}</h2>
                                        <h4 className="text-gray-400 text-sm">{userDetails.email}</h4>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-6 space-y-4 mt-4 text-xl">
                        {menuItems.map((item, i) => (
                            <Link key={i} to={item.link} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-xl transition-all">
                                {item.icon}
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <button className="mt-auto border hover:bg-gray-700 hover:border w-full p-2 cursor-pointer rounded transition-all text-lg" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                // Bottom Navigation for mobile
                <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center py-2 border-t border-gray-600">
                    {menuItems.map((item, i) => (
                        <Link key={i} to={item.link} className="text-2xl p-2">
                            {item.icon}
                        </Link>
                    ))}
                    {/* <div className=" gap-2"> */}
                    {/* <FaUserCircle className="text-3xl" /> */}
                    <img
                        src={userDetails.avatar}
                        className="w-10 h-10 rounded-full"
                    />
                    {/* <span>{userDetails.username}</span> */}
                    {/* </div> */}
                    {/* <button onClick={handleLogout} className="text-2xl p-2 text-red-500">
                        Logout
                    </button> */}
                </div>
            )}
        </>
    );
}

export default Sidebar;
