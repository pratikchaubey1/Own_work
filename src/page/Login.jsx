import React from 'react';

function Login() {
  return (
    <div className=" mt-19 flex flex-col lg:flex-row w-full min-h-screen bg-white/10">
     
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
          <form className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
              <p className="text-sm text-gray-500 mt-2">Please enter your details to sign in.</p>
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="accent-violet-600" />
                Remember for 30 days
              </label>
              <button type="button" className="text-violet-600 hover:underline focus:outline-none">
                Forgot Password?
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold"
              >
                Sign In
              </button>
              <button className="border border-gray-300 rounded-xl py-3 text-sm hover:bg-gray-100">
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>

      
      <div className="hidden lg:flex w-1/2 items-center justify-center relative bg-gray-100">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce shadow-xl" />
        <div className="absolute bottom-0 w-full h-1/2 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
}

export default Login;
