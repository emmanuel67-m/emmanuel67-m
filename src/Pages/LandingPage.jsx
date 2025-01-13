import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For animations
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// ImageSlider Component
const ImageSlider = () => {
  const images = [
    'https://media.istockphoto.com/id/1477488034/photo/woman-shopping-online-from-the-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z5YNpIOnDwDFP9v3U8pRQnBfVmkZkTtnt-s79kigV-8=',
    'https://media.istockphoto.com/id/1332793264/photo/african-american-holding-tablet-and-shopping-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=QFm7_qlNYOf87JYpWpzmbnsirDJ4zS3W2TG9GoRtQqY=',
    'https://media.istockphoto.com/id/1925416245/photo/mini-shopping-bag-boxes-and-cart-on-laptop-closeup-online-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=O4LCe5sQALvUaSR85JKA_ZGo-bAa8v-C1Qip7awtiZw=',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="p-10 bg-cover bg-center h-[70vh] flex flex-col justify-center py-2"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        transition: "background-image 1s ease-in-out", // Smooth transition between images
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to ShopSphere</h2>
        <p>Your one-stop shop for all your online needs.</p>
      </motion.div>
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation
  const [showDiscountBanner, setShowDiscountBanner] = useState(true); // Show discount banner
  const [email, setEmail] = useState(""); // Email state for subscription
  const [isSubscribed, setIsSubscribed] = useState(false); // To track subscription status

  const links = ['Home', 'About', 'Services', 'Contact'];
  const currentYear = new Date().getFullYear();

  // Array of product data
  const products = [
    {
      name: 'Glowing Radiant Proposal Engagement Ring And Wedding Band',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/6661071/1.jpg?7781',
      description: 'Amazing features and benefits in this product.',
    },
    {
      name: 'UNISEX FOLDABLE HEAD WARMER BEANIE HAT',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/065787/1.jpg?6146',
      description: 'High quality, durable, and affordable.',
    },
    {
      name: 'Men Shoes Sneakers Skateboarding Shoes Sport Shoes Running Sneakers Casual Shoes',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/582039/1.jpg?2496',
      description: 'Must-have for every shopper.',
    },
  ];

  const handleShopNowClick = () => {
    // Navigate to the shop page when the user clicks the "Shop Now" button
    navigate("/products");
  };

  const handleSubscribe = () => {
    // Handle email subscription logic (could be an API call to save the email)
    if (email) {
      setIsSubscribed(true);
      setEmail(""); // Reset email input field
    }
  };

  return (
    <div>
      {/* Discount Banner */}
      {showDiscountBanner && (
        <div className="bg-red-500 text-white text-center py-3">
          <p>🎉 50% OFF on All Products! Use code: SALE50 at checkout 🎉</p>
          <button
            onClick={() => setShowDiscountBanner(false)}
            className="text-white bg-transparent border-2 border-white px-4 py-1 rounded-full mt-2"
          >
            Close
          </button>
        </div>
      )}

      {/* Image Slider */}
      <ImageSlider />

      {/* Main Content */}
      <div className="flex justify-center items-center py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Our Products</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover amazing products at unbeatable prices. Start shopping today!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition-all duration-200"
            onClick={handleShopNowClick} // Add onClick handler
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>

      {/* Product Cards */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg transition-all"
              >
                View Product
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subscription Section */}
      <div className="py-16 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Offers</h2>
        <p className="text-lg mb-6">Sign up for our newsletter and never miss out on exclusive discounts!</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded-l-lg border-none text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email input state
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-500 text-black py-2 px-6 rounded-r-lg font-semibold"
            onClick={handleSubscribe}
          >
            Subscribe
          </motion.button>
        </div>
        {isSubscribed && <p className="mt-4 text-lg">🎉 Thank you for subscribing! 🎉</p>}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-8 lg:mb-0">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">ShopSphere</h3>
              <p className="text-lg text-gray-300">Your one-stop online shopping destination.</p>
            </div>
            <div className="flex gap-8">
              {links.map((link, index) => (
                <ul key={index} className="text-center">
                  <li>
                    <motion.a
                      href="#"
                      className="text-lg text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mb-8 lg:mb-0">
            <motion.a
              href="#"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a
              href="#"
              className="text-2xl text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </motion.a>
          </div>

          <div className="text-center mt-8 text-sm text-gray-400">
            <p>&copy; {currentYear} ShopSphere. All Rights Reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default LandingPage;
