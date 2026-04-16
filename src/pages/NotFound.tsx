
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-blue-600">4</span>
            <span className="text-gray-900">0</span>
            <span className="text-blue-600">4</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
