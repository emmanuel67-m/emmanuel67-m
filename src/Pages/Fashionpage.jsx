import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ClothingPage = () => {
  // Array of clothing product details (image URL, name, price, etc.)
  const clothingProducts = [
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/4474192/1.jpg?0185", name: "Primark Girls Smocked Cotton Dress", price: "$29.99", description: "Comfortable and stylish cotton dress for girls.", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/3046473/1.jpg?8246", name: "Men's Cotton Collar 2 Piece (Black)", price: "$49.99", description: "Classic black cotton collar shirt set.", inStock: false },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/7970362/1.jpg?1697", name: "VEJARO BC008 Infant Baby Clothes Casual Suit-Milk White&Blue", price: "$69.99", description: "Soft and cozy baby clothes suit for all-day comfort.", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/9913053/1.jpg?2408", name: "Danami Men's Short Sleeve Henley T Shirt- White", price: "$39.99", description: "Versatile short sleeve Henley shirt for men.", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/0147112/1.jpg?8161", name: "Binnys Ladies Breathable Single Padded Bra ( D Cup)", price: "$19.99", description: "Breathable padded bra for maximum comfort.", inStock: false },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/712127/1.jpg?0145", name: "ATWIGA Black Casual Bag Business Laptop Backpack", price: "$59.99", description: "Durable laptop backpack for business and casual use.", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/042576/1.jpg?3807", name: "ALagzi Mens Casual High-Top Shoes Running Sneakers - Beige", price: "$89.99", description: "Stylish high-top sneakers for casual or athletic wear.", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/545695/1.jpg?8208", name: "Mateamoda 3 PCS Women Bags Handbags Ladies Bags Purse Hobo Bags", price: "$39.99", description: "Versatile handbag set for women.", inStock: false },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/3017612/1.jpg?8818", name: "Men Jacket Coat Lightweight Jacket With Hood Yellow", price: "$49.99", description: "Lightweight jacket with a hood for men.", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/2706352/1.jpg?0738", name: "Urban Classics Long Sleeve Jacket", price: "$129.99", description: "Long sleeve jacket perfect for cooler weather.", inStock: true },
    { img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/9270121/1.jpg?7783", name: "6 IN 1 UNISEX PLAIN ROUND NECK POLO T-SHIRT", price: "$69.99", description: "Essential plain polo T-shirt for any occasion.", inStock: true },
  ];

  const navigate = useNavigate();

  // Navigate to the product details page with the product info
  const handleViewProduct = (product) => {
    navigate('/clothing-details', { state: { product } }); // Navigate and pass the selected product
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">Clothing Collection</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Explore our wide range of stylish and trendy clothing options.
      </p>

      {/* Clothing Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {clothingProducts.map((product, index) => (
          <div
            key={index}
            className={`border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 ${
              product.inStock ? 'bg-white' : 'bg-gray-200' // Change background color if out of stock
            }`}
            onClick={() => handleViewProduct(product)} // Handle click to view product details
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

export default ClothingPage;
