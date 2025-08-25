import React from 'react';

function About() {
 
  return (
    <div className="mt-24 mb-10 flex items-center justify-center min-h-screen bg-white px-4">
      <div className="bg-gray-100 p-8 md:p-10 hover:scale-[1.01] hover:shadow-xl hover:shadow-gray-300 max-w-xl w-full rounded-lg duration-200">
        
        <div className="flex justify-center mb-6">
          <img
            className="rounded-full h-40 w-40 object-cover shadow-md hover:scale-[1.01] hover:shadow-lg hover:shadow-gray-200"
            src="https://i.pinimg.com/736x/73/92/d0/7392d070a1da1f1cd66e03f9256ef9b2.jpg"
            alt="Prab"
          />
        </div>

        <div className="text-gray-700 text-base leading-relaxed space-y-4">
          <p className="text-lg font-semibold text-center text-indigo-600">
            Welcome to <span className="font-bold">Prab/Shop</span> — Your Ultimate Online Shopping Destination!
          </p>
          <p>
            At Prab/Shop, we bring you a wide range of trendy, high-quality products at unbeatable prices. Whether you're
            looking for the latest fashion, tech gadgets, or daily essentials — we've got it all in one place.
          </p>
          <p>
            Enjoy a seamless shopping experience with fast delivery, secure payments, and excellent customer support. Start your
            shopping journey with us today!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-2">
          <div className="font-bold text-xl text-black">
            Owned By:{' '}
            <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 animate-pulse">
              Prab
            </span>
          </div>
          <a
            href="https://www.instagram.com/_prabonly/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <img
              src="https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png"
              alt="Instagram"
              className="h-8 w-8 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
