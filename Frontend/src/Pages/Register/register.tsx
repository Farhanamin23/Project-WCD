import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register: React.FC = () => {
  let [isName, setIsName] = useState("");
  let [isEmail, setIsEmail] = useState("");
  let [isPassword, setIsPassword] = useState("");

  let handleSubmit = (e: any) => {
    alert("An essay was submitted: " + isName + isEmail + isPassword);
    e.preventDefault();
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">Register</h3>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="username">
                  Username
                  <label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => setIsName(e.target.value)}
                    />
                  </label>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="Email">
                  Email
                  <label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => setIsEmail(e.target.value)}
                    />
                  </label>
                </label>
              </div>
              <div className="mt-4">
                <label className="block">
                  Password
                  <label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => setIsPassword(e.target.value)}
                    />
                  </label>
                </label>
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Register
                </button>
                <Link to={"/login"}>
                  <u>Login Now</u>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
