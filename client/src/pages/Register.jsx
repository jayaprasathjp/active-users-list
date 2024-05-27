import { Link,useNavigate } from "react-router-dom";
import { FormInput } from "./common";
function Register() {
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    if (response.ok) {
      console.log("Success:", body);
      navigate("/userLogin");
    } else {
      console.error("Error:", body);
      alert(body.error);
    }
  };
  return (
    <div className=" min-h-screen flex w-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white shadow-lg border py-12 rounded-xl p-4">
          <div className="flex flex-col items-center">

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Register for a new account
            </h2>
          </div>

          <div className="mt-8 ">
            <div className="py-8 px-4 sm:rounded-lg sm:px-10">
              <form onSubmit={handleRegister} className="space-y-6" >
                <FormInput
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                />
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
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
      Register
    </button>
              </form>
            </div>
          </div>
          <div className="ml-9">
            Already have an account?{" "}
            <Link className=" text-blue-500" to="/UserLogin">
              Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register