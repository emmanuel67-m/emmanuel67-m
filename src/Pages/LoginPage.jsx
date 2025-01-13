import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { supabaseClient } from "../config/supabase-client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null); // User session state
  const [user, setUser] = useState(null); // Store user data
  const navigate = useNavigate();

  // Fetch the current session and listen for session changes
  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      setSession(session);
      if (session) {
        // Set user data from session
        setUser(session.user);
      }
    };

    fetchSession();

    // Subscribe to auth state changes (login/logout)
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setUser(session.user);
      } else {
        setUser(null); // Clear user data on logout
      }
    });
  }, []);

  // Login user
  const Loginuser = async () => {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Log in successful");
      navigate("/"); // Navigate to products after successful login
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Logout user
  const LogoutUser = async () => {
    try {
      await supabaseClient.auth.signOut();
      toast.success("Logged out successfully");
      setSession(null); // Clear the session
      setUser(null); // Clear user data
      navigate("/register"); // Redirect to register page after logout
    } catch (error) {
      toast.error("Error logging out. Please try again.");
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {session ? (
          // If the user is logged in, show the profile and logout button
          <div className="text-center">
            <h3 className="text-3 font-semibold text-gray-800 mb-6">
              Welcome, {user?.email}!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              You are logged in. Here is your profile.
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800">Your Profile</h4>
              <div className="mt-4 text-gray-600">
                {/* Profile Info */}
                <p><strong>Email:</strong> {user?.email}</p>
                {/* You can also display additional user data if available */}
                {/* <p><strong>Full Name:</strong> {user?.name || "N/A"}</p> */}
                {/* Add any other profile fields that are relevant */}
              </div>
            </div>
            {/* Styled Log Out Button */}
            <button
              onClick={LogoutUser}
              className="w-full py-3 mt-6 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Log Out
            </button>
          </div>
        ) : (
          // If the user is not logged in, show the login form
          <>
            <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              Log In
            </h3>
            <p className="text-lg text-gray-600 text-center mb-8">
              Enter your email and password to log in
            </p>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={passwordShown ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500"
                />
                <span
                  onClick={() => setPasswordShown(!passwordShown)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 text-gray-600" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-gray-600" />
                  )}
                </span>
              </div>
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              onClick={Loginuser}
              className="w-full py-3 mt-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Log In
            </button>

            {/* Forgot Password Link */}
            <div className="mt-4 text-right">
              <a
                href="#"
                className="text-sm text-indigo-500 hover:text-indigo-700"
              >
                Forgot password?
              </a>
            </div>

            {/* Google Sign In Button */}
            <button
              type="button"
              className="w-full mt-6 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100"
            >
              <img
                src="https://www.material-tailwind.com/logos/logo-google.png"
                alt="google"
                className="h-6 w-6"
              />
              Sign In with Google
            </button>

            {/* Redirect to Register Page */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Not registered?{" "}
              <a href="/register" className="text-indigo-500 font-medium">
                Create an account
              </a>
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default LoginPage;
