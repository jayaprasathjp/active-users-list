import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("id");
    const userName = queryParams.get("name");
    const handleLogout=async()=>{
        const response=await fetch(`http://localhost:4000/logout/${userId}`);
        navigate('/');
    }
  return (
   
<>
  
<h2 className="text-2xl ml-20 font-extrabold tracking-tight text-indigo-600 m-10">
        Active Users List
      </h2>
      <div className=' flex justify-center items-center'    >
<div className="w-full max-w-sm bg-indigo-100 border shadow-md border-indigo-200 rounded-lg ">
    
    <div className="flex flex-col items-center py-10">
        <h5 className="mb-1 text-2xl font-medium text-gray-900">Welcome</h5>
        <h5 className="mb-1 text-xl font-medium text-gray-900">{userName}</h5>
        <span className="text-sm text-gray-500 ">Online</span>
        <div className="flex mt-4 md:mt-6">
            <button onClick={handleLogout} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Logout</button>
        </div>
    </div>
</div>
</div>
</>
  )
}

export default Profile