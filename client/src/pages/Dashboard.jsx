import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
function Dashboard() {
  const [data,setData] = useState({total:0,online:0,offline:0,away:0});
  const navigate = useNavigate();
    useEffect(() =>{
    const handleFetch =async()=>{
      const response=await fetch('http://localhost:4000/dashboard')
      const data=await response.json();
      setData(data);
      console.log(data);
    }
    handleFetch();},[]);
  const handleLogout=async()=>{
    const response=await fetch(`http://localhost:4000/logout/${1}`);
    navigate('/');
}
  return (
    <div>
        <div className="flex justify-between">
       
    <h2 className="text-2xl ml-20 font-extrabold tracking-tight text-indigo-600 m-10">
        Active Users List
      </h2>
      <div className="m-16 mt-4 md:mt-6">
            <button onClick={handleLogout} className="inline-flex items-center px-6 py-4 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Logout</button>
        </div>
      </div>
    <h2 className="text-2xl ml-20 font-extrabold tracking-tight text-gray-900">
        Dashboard
      </h2>
      <div className='flex space-x-14 justify-center m-5'>
<div className="block w-64 p-6 bg-cyan-100 border border-gray-200 rounded-lg shadow hover:bg-cyan-50">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Total Users</h5>
<p className="font-bold text-gray-700 ">{data?.total}</p>
</div>
<div className="block w-64 p-6 bg-cyan-100 border border-gray-200 rounded-lg shadow hover:bg-cyan-50">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Online</h5>
<p className="font-bold text-gray-700 ">{data?.online}</p>
</div>
<div className="block w-64 p-6 bg-cyan-100 border border-gray-200 rounded-lg shadow hover:bg-cyan-50">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Offline</h5>
<p className="font-bold text-gray-700 ">{data?.offline}</p>
</div>
<div className="block w-64 p-6 bg-cyan-100 border border-gray-200 rounded-lg shadow hover:bg-cyan-50">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Away</h5>
<p className="font-bold text-gray-700 ">{data?.away}</p>
</div>

</div>
      </div>
  )
}

export default Dashboard