

import React, { useState } from 'react'

import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/Authapi';

function Login() {

    const {setUser} = useAuth()

    const navigate = useNavigate()



    const [email, setEmail] = useState("")
     const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e: React.FormEvent)=> {
    e.preventDefault()
    setLoading(true)

    try {
         const user = await loginUser(email,password)
    if(user){
          setUser(user)
          toast.success("Welcome back! 👋");
          setTimeout(()=> navigate("/"), 2000)
    }else{
    toast.error("Invalid email or password.");
    }
    } catch (error:any) {
      toast.error(error.message || "Login failed");    
    }finally{
        setLoading(false)
    }
   
  }

return (
  <div className="min-h-screen  min-w-screen flex items-center justify-center bg-linear-to-br from-sky-50 via-cyan-50 to-emerald-50 px-4 py-6 sm:px-6">
<div className="w-full max-w-[500px] bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-5 sm:p-7 md:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-6 text-center">
        Welcome Back 👋
      </h2>

      <form onSubmit={handleSubmit}>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-sky-800 mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              rounded-lg
              border border-sky-200
              px-3 py-2.5
              sm:px-4 sm:py-3
              text-sm sm:text-base
              focus:ring-2
              focus:ring-sky-300
              outline-none
              transition
            "
            placeholder="Enter your email"
            required
          />
        </div>


        {/* Password */}
        <div className="mt-5">
          <label className="block text-sm font-medium text-sky-800 mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              rounded-lg
              border border-sky-200
              px-3 py-2.5
              sm:px-4 sm:py-3
              text-sm sm:text-base
              focus:ring-2
              focus:ring-sky-300
              outline-none
              transition
            "
            placeholder="Enter your Password"
            required
          />
        </div>


        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            mt-6
            rounded-lg
            bg-linear-to-r
            from-sky-400
            to-cyan-400
            text-white
            py-2.5
            sm:py-3
            text-sm sm:text-base
            font-semibold
            hover:from-sky-500
            hover:to-cyan-500
            transition
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          {loading ? "Submitting..." : "Login"}
        </button>

      </form>


      {/* Register */}
      <p className="text-sm text-sky-700 text-center mt-5">
        Don't have an account?{" "}

        <a
          className="text-cyan-600 font-semibold hover:underline"
          href="/register"
        >
          Register
        </a>
      </p>

    </div>

  </div>
)


}

export default Login