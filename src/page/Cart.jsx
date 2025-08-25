import React, { useContext, useState } from "react";
import { Ecart } from "../Context/Context";

function Cart() {
  const { cart, remove } = useContext(Ecart);
  const [quantities, setQuantities] = useState({});
  const [selected, setSelected] = useState({}); // ✅ tick untick state

  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const toggleSelect = (id) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const qty = quantities[item.id] || 1;
      if (selected[item.id]) {
        return acc + item.price * qty;
      }
      return acc;
    }, 0);
  };

  return (
    <div className="mt-24 px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT SIDE CART ITEMS */}
      <div className="lg:col-span-2 space-y-6">
        {cart.length ? (
          cart.map((item, index) => {
            const quantity = quantities[item.id] || 1;
            const subtotal = (item.price * quantity).toFixed(2);

            return (
              <div
                key={item.id}
                className="p-4 sm:p-5 bg-white rounded-xl shadow-lg hover:shadow-gray-300 hover:scale-[1.01] transition flex flex-col sm:flex-row sm:items-center sm:gap-x-5 gap-y-4"
              >
                <img
                  className="w-full sm:w-32 h-48 sm:h-40 object-cover rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition"
                  src={item.image}
                  alt={item.title}
                />

                <div className="flex flex-col justify-between flex-1 space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 capitalize">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 font-semibold">${item.price}</p>

                  <div className="flex items-center justify-between mt-2 flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrement(item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                        disabled={quantity === 1}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-lg font-medium text-gray-800">
                        {quantity}
                      </span>
                      <button
                        onClick={() => increment(item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-gray-800 font-semibold">
                      Subtotal: ${subtotal}
                    </p>

                    <button
                      onClick={() => remove(index)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition active:scale-95"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-96 text-gray-500 space-y-4">
            <h1 className="text-xl font-semibold text-center">
              Your cart is empty
            </h1>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition active:scale-95"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SIDE TOTAL CARD */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 p-6 bg-white rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>

          <div className="space-y-3 text-gray-700">
            {cart.map((item) => {
              const quantity = quantities[item.id] || 1;
              const subtotal = (item.price * quantity).toFixed(2);

              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={!!selected[item.id]}
                      onChange={() => toggleSelect(item.id)}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <span className="font-medium">
                      {item.title} × {quantity}
                    </span>
                  </div>
                  <span>${subtotal}</span>
                </div>
              );
            })}
          </div>

          <div className="border-t pt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-xl font-bold text-blue-600">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>

          <button className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
