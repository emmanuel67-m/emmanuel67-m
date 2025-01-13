import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { supabaseClient } from "../config/supabase-client";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Registeruser = async () => {
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("Sign up successful");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="grid h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h3 className="mb-4 text-3xl font-semibold text-gray-800 text-center">
          Create Your Account
        </h3>
        <p className="mb-8 text-lg text-gray-600 text-center">
          Enter your email and password to register with us
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
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
            className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
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
              className="w-full p-4 border border-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
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

        {/* Register Button */}
        <button
          type="submit"
          onClick={Registeruser}
          className="w-full py-3 mt-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>

        {/* Forgot Password Link */}
        <div className="mt-4 flex justify-between text-sm">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700"
          >
            Forgot password?
          </a>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full mt-6 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100"
        >
          <img
            src="https://www.material-tailwind.com/logos/logo-google.png"
            alt="google"
            className="h-6 w-6"
          />
          Sign Up with Google
        </button>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/Login" className="text-blue-500 font-medium">
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
