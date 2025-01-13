import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animated buttons

const GamingPage = () => {
  // Array of gaming product details (including inStock property)
  const gamingProducts = [
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/4987412/1.jpg?8390", name: "Terios T3 X3 Wireless Joystick Gamepad PC Game Controller", price: "$39.99", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/040786/1.jpg?3442", name: "PS4 Controller - Dualshock 4 Wireless PS4 Pad- Gold", price: "$59.99", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/6311431/1.jpg?3960", name: "Wired Luminescent Gaming Mouse", price: "$49.99", inStock: false },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/0499662/1.jpg?3948", name: "Scrabble Original scramble", price: "$179.99", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/5088601/1.jpg?3368", name: "FURGLE Custom Home & Studio Ergonomic Gaming Chair", price: "$299.99", inStock: false },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/0410701/1.jpg?4825", name: "3 USB HUB LED High Speed GAMING USB HUB PC LAPTOP COMPUTER MICE MOUSE", price: "$29.99", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/895659/1.jpg?4027", name: "Dices ---10pcs", price: "$59.99", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/6193331/1.jpg?6188", name: "8 Bit Video Games Console Handheld Gamepad", price: "$49.99", inStock: false },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/7937832/1.jpg?7631", name: "Kotion Each G9000 Gaming Headset", price: "$199.99", inStock: true },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">Gaming Products</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Explore a wide range of gaming accessories and gear for an enhanced experience.
      </p>

      {/* Gaming Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {gamingProducts.map((product, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">Enhance your gaming experience with this product.</p>
            <div className={`mt-4 text-lg font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? product.price : "Out of Stock"}
            </div>

            {/* Add to Cart button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`mt-4 py-2 px-6 rounded-lg font-semibold transition-all duration-200 ${product.inStock ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
              disabled={!product.inStock} // Disable if out of stock
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamingPage;
