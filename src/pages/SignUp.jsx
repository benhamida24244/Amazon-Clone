import React from 'react';
import darklogo from '../assets/darklogo.png';
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm text-center">
        <img
          src={darklogo}
          alt="Amazon Logo"
          className="w-28 mx-auto mb-6"
        />
        <h2 className="text-2xl mb-4">Create account</h2>
        <form className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium mb-1">Your name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium mb-1">Mobile number or email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="At least 6 characters"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md font-medium transition-colors"
          >
            Continue
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          By creating an account, you agree to Amazon's{' '}
          <a href="/" className="text-blue-600 hover:underline">
            Conditions of Use
          </a>{' '}
          and{' '}
          <a href="/" className="text-blue-600 hover:underline">
            Privacy Notice
          </a>.
        </p>
        <hr className="my-6 border-gray-300" />
        <p className="text-sm">
          Already have an account?{' '}
          <Link to="/signin" href="/" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
