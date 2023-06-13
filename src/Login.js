import React from 'react';

const LoginForm = () => {
  const handleSignIn = () => {
    // Handle sign in with Google logic
    console.log('Sign in with Google');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <p className="text-center text-gray-600 mb-4">Please sign in with your Google account associated with PUCIT.</p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleSignIn}
        >
          Sign in with Google
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">Make sure to sign in with a Google account associated with PUCIT.</p>
      </div>
    </div>
  );
};

export default LoginForm;
