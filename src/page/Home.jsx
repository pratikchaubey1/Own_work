import React, { useContext } from 'react';
import { Ecart } from '../Context/Context';

function Card() {
  const {  filteredData, handleclick}=useContext(Ecart)
  return (
    <div className='mt-20'>

    <div className="min-h-screen  bg-gray-50 px-2 sm:px-6 md:px-12 py-6">
      
      <div className="w-full max-w-7xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://i.pinimg.com/736x/ee/b3/59/eeb359d08bb0e8a18b62ce0c64721884.jpg"
          alt="Top banner"
          className="w-full h-[200px] sm:h-[350px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-gray-300"
          />
      </div>

      
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {  filteredData.length ? (
              filteredData.map((item, index) => (
              <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
               
                <div className="w-full h-[200px] sm:h-[220px] overflow-hidden rounded-t-2xl flex items-center justify-center bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain transition-transform duration-300 hover:scale-[1.01]"
                    />
                </div>

                
                <div className="flex flex-col justify-between flex-1 p-4 sm:p-6">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 line-clamp-3">{item.description}</p>
                    <div className="mt-2 sm:mt-3 text-indigo-600 font-bold text-base sm:text-lg">
                      ${item.price}
                    </div>
                  </div>

                  <button
                    onClick={() => handleclick(item)}
                    className="mt-4 w-full py-2 sm:py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow hover:shadow-md transition duration-200 active:scale-95"
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
          </div>
  );
}

export default Card;
