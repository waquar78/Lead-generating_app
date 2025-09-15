import React from "react";
import { useNavigate } from "react-router-dom";

const SubmitPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 px-4">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg text-center">
        
        {/* Submitted Text */}
        <h2 className="text-2xl font-bold text-green-600 mb-6">
          Submitted
        </h2>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-base mb-8">
          Your response has been successfully submitted.  
          We’ll get back to you soon.
        </p>

        {/* Single Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default SubmitPage;
