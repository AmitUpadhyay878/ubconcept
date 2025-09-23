import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-2xl p-8 text-center">
        {/* 404 Animation Container */}
        <div className="relative mb-12">
          <h1 className="text-[150px] md:text-[200px] font-black bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="absolute -bottom-8 w-full">
            <div className="h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm" />
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="space-y-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL?
            Be sure to check your spelling.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30
                hover:from-blue-600 hover:to-purple-600 transform hover:scale-[1.02] 
                transition-all duration-200 focus:outline-none focus:ring-2 
                focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Back to Homepage
            </Link>
            
            <Link 
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-gray-100 font-semibold 
                rounded-lg border-2 border-gray-700 hover:bg-gray-700 
                transform hover:scale-[1.02] transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 
                focus:ring-offset-gray-900"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Additional Help Text */}
        <p className="mt-12 text-sm text-gray-400">
          Need immediate assistance?{' '}
          <Link 
            href="/help" 
            className="text-blue-400 hover:text-blue-300 font-medium underline 
              decoration-2 underline-offset-2 hover:decoration-blue-300"
          >
            Visit our Help Center
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;