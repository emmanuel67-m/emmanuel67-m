import React from 'react';

const Electronics = () => {
  // Array of electronics product details with stock information
  const electronicsProducts = [
    { 
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/2903383/1.jpg?8096", 
      name: "Tecno pop 9 67GB", 
      price: "NGN1390.99", 
      description: "Latest smartphone with advanced features.", 
      inStock: true 
    },
    { 
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/3223053/1.jpg?5345", 
      name: "HP EliteBook 840GB", 
      price: "NGN2500.00", 
      description: "High-performance laptop for work and play.", 
      inStock: false 
    },
    { 
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/9929501/1.jpg?4644", 
      name: "Havit 162 Overwireless HeadPhone", 
      price: "NGN1595.99", 
      description: "Noise-cancelling headphones for immersive sound.", 
      inStock: true 
    },
    { 
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/1897052/1.jpg?0512", 
      name: "Hikers 32\" Inches Frameless", 
      price: "NGN7990.99", 
      description: "4K Ultra HD Smart TV for stunning visuals.", 
      inStock: true 
    },
    { 
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/0360392/1.jpg?2640", 
      name: "Household Paint Sprayer Portable Detachable", 
      price: "NGN2992.99", 
      description: "Efficient home appliances for modern living.", 
      inStock: false 
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">Electronics</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Explore our wide range of electronic gadgets, from smartphones to home appliances.
      </p>

      {/* Electronics Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {electronicsProducts.map((product, index) => (
          <div
            key={index}
            className={`border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 ${
              product.inStock ? 'bg-white' : 'bg-gray-200' // Change background if out of stock
            }`}
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 text-lg font-semibold text-blue-600">{product.price}</div>

            {/* Stock Status and Add to Cart Button */}
            <div
              className={`mt-4 text-lg font-semibold ${
                product.inStock ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>

            {/* Add to Cart button only for in-stock items */}
            {product.inStock && (
              <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
