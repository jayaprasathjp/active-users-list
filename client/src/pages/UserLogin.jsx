import React from 'react'
import {  FormInput } from "./common";
import { Link,useNavigate } from 'react-router-dom';
function UserLogin() {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch("http://localhost:4000" + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    if (response.ok) {
      if(body.role=="admin"){
      navigate("/dashboard");}
    else
    navigate(`/profile/?id=${body.id}&name=${body.name}`);
    } else {
      alert(body.message);
    }
  };
  return (
    <div className=" min-h-screen flex w-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white shadow-lg border py-12 rounded-xl p-4">
        <div className="flex flex-col items-center">
     

          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 ">
          <div className="py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <FormInput
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
              />
              <FormInput
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
              />
               <button
      type="submit"
      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Sign In    </button>
            </form>
          </div>
        </div>
        <div className="ml-9">
          Don’t have an account yet?{" "}
          <Link className=" text-blue-500" to="/register">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserLogin