import React from 'react';
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg relative">
        {/* Top Half (Red Section) */}
        <div className="relative bg-red-600 p-8 rounded-t-lg flex flex-col items-center">
          {/* Header Sign In */}
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-white text-center py-2 px-8 rounded-full shadow-md border-4 border-black">
            <h1 className="text-lg font-semibold text-red-600">Sign In</h1>
          </div>

          {/* Profile Icon */}
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-black mt-8">
            <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* Bottom Half (White Section) */}
        <div className="bg-white p-8 rounded-b-lg">
          {/* Login Form */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
