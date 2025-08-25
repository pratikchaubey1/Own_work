import React from 'react';

function Card({ data, handleclick }) {
  return (
    <div className="min-h-screen bg-gray-50 px-6 sm:px-10 md:px-16 py-12">
      <div className="w-full max-w-7xl mx-auto mb-12">
        <img
          src="https://i.pinimg.com/736x/ee/b3/59/eeb359d08bb0e8a18b62ce0c64721884.jpg"
          alt="Top banner"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl ring-1 ring-gray-200 hover:ring-indigo-300 overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="bg-gray-100 h-52 flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain transition duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h2>
                  <p className="text-gray-500 text-sm line-clamp-3">{item.description}</p>
                  <div className="text-indigo-600 font-extrabold text-xl mt-2">${item.price}</div>
                  <button
                    onClick={() => handleclick(index)}
                    className="mt-4 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-700 text-lg font-medium">
              Loading products...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
