import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <div className='mt-20'>

    <div className="max-w-md w-full mx-auto p-8 bg-white/2 rounded-2xl shadow-xl mt-10 shadow-gray-300">
      <h2 className="text-3xl text-center text-indigo-600 font-bold mb-6">Contact Us</h2>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                
                message: "Invalid email address"
              }
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="message"
            >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            placeholder="Write your message here..."
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
            </div>
  );
}

export default Contact;
