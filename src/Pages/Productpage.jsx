import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const FoodOrder = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false); // Track if we're in checkout phase
  const [paymentMethod, setPaymentMethod] = useState(''); // Store the selected payment method

  // Fetch food items from the API on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setFoodItems(data); // Set the fetched products in state
      })
      .catch(error => {
        console.error('Error fetching food items:', error);
        setFoodItems([]); // In case of an error, set foodItems as an empty array
      });
  }, []);

  // Add food item to the cart
  const orderFood = (foodId, foodName, foodPrice) => {
    const existingItem = cart.find(item => item.id === foodId);
    let newCart;

    if (existingItem) {
      newCart = cart.map(item =>
        item.id === foodId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { id: foodId, name: foodName, price: foodPrice, quantity: 1 }];
    }

    setCart(newCart);
    setTotal(newCart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    // alert(`${foodName} has been added to your cart!`);
    toast.success(`${foodName} has been added to your cart!`)
  };

  // Handle the checkout process
  const checkout = () => {
    setIsCheckout(true); // Switch to checkout view
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // Handle the payment
  const handlePayment = () => {
    if (paymentMethod === '') {
      toast.success('Please select a payment method.')
    } else {
      // alert(`Payment successful using ${paymentMethod}. Thank you for your purchase!`);
      toast.success(`Payment successful using ${paymentMethod}. Thank you for your purchase!`)
      setCart([]); // Clear the cart after payment
      setTotal(0); // Reset the total to 0
      setIsCheckout(false); // Go back to the normal view
    }
  };

  return (
    <div className="bg-white text-gray-800 h-screen p-4">
      <h1 className="text-4xl text-center font-bold text-white mb-12">
        Available Foods
      </h1>

      {/* Food Items Grid */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {foodItems.map(item => {
          const foodPrice = item.price.toFixed(2); // Format price

          return (
            <div
              key={item.id}
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-xl max-w-xs flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-xs h-auto rounded-lg shadow-xl mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-lg text-orange-500 mb-4">Price: ${foodPrice}</p>
              <button
                onClick={() => orderFood(item.id, item.title, item.price)}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Cart Sidebar */}
      <div className="fixed top-20 right-4 bg-white bg-opacity-90 text-gray-800 p-6 rounded-lg shadow-xl w-80">
        <h3 className="text-2xl font-bold text-center mb-4">Cart</h3>
        <ul className="space-y-2">
          {cart.length === 0 ? (
            <li className="text-center text-gray-500">Your cart is empty.</li>
          ) : (
            cart.map((item, index) => (
              <li key={index} className="text-sm">
                <span className="font-semibold">{item.name}</span> - ${item.price} x {item.quantity}
              </li>
            ))
          )}
        </ul>
        <p className="mt-4 text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={checkout}
          className="bg-teal-600 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-teal-700 transition-colors transform hover:scale-105"
        >
          Checkout
        </button>
      </div>

      {/* Payment Method Modal / Section */}
      {isCheckout && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 className="text-3xl font-bold mb-6 text-center">Select Payment Method</h2>
            <div className="space-y-4">
              <div>
                <label className="text-lg font-semibold">Credit Card</label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  onChange={handlePaymentMethodChange}
                  className="ml-2"
                />
              </div>
              <div>
                <label className="text-lg font-semibold">PayPal</label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  onChange={handlePaymentMethodChange}
                  className="ml-2"
                />
              </div>
              <div>
                <label className="text-lg font-semibold">Cash on Delivery</label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  onChange={handlePaymentMethodChange}
                  className="ml-2"
                />
              </div>
              <button
                onClick={handlePayment}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-blue-700 transition-colors transform hover:scale-105"
              >
                Pay Now
              </button>
              <button
                onClick={() => setIsCheckout(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-gray-600 transition-colors transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodOrder;
