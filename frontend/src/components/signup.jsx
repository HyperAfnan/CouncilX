import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Detect device type for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      // Tablet range - between 640px and 1024px
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-black">
      {/* Left Side - Gradient */}
      <div className={`${isTablet ? 'flex h-1/3' : 'hidden md:flex md:h-auto md:w-1/2'} bg-gradient-to-b from-purple-400 to-purple-900 flex-col items-center justify-center p-4 md:p-12 relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="z-10 text-center space-y-4 md:space-y-8">
          <div className="flex items-center justify-center">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
            </div>
          </div>
               
          
          <h1 className="text-2xl md:text-3xl font-bold text-white">Get Started with Us</h1>
          <p className="text-white text-sm md:text-base">Complete these easy steps to register your account.</p>

          
          <div className="space-y-2 md:space-y-3 w-full max-w-xs mx-auto mt-4 md:mt-8">
            <button className="bg-white text-black rounded-lg py-2 md:py-3 px-3 md:px-4 w-full text-sm md:text-base font-medium flex items-center justify-center space-x-2">
              <span>Sign up your account</span>
            </button>
            
            <button className="bg-white bg-opacity-10 text-white rounded-lg py-2 md:py-3 px-3 md:px-4 w-full text-sm md:text-base font-medium flex items-center justify-center space-x-2">
              <span>Set up your workspace</span>
            </button>
            
            <button className="bg-white bg-opacity-10 text-white rounded-lg py-2 md:py-3 px-3 md:px-4 w-full text-sm md:text-base font-medium flex items-center justify-center space-x-2">
              <span>Set up your profile</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md space-y-4 md:space-y-6 lg:space-y-8">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Sign Up Account</h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">Enter your data to create your account.</p>
          </div>
          
          <div className="flex gap-3 md:gap-4">
            <button className="w-1/2 border border-gray-700 rounded-lg py-2 px-3 md:px-4 text-white flex items-center justify-center space-x-2 text-sm">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="w-1/2 border border-gray-700 rounded-lg py-2 px-3 md:px-4 text-white flex items-center justify-center space-x-2 text-sm">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>Github</span>
            </button>
          </div>
          
          <div className="flex items-center">
            <div className="flex-grow h-px bg-gray-700"></div>
            <span className="px-3 text-gray-500 text-xs sm:text-sm">or</span>
            <div className="flex-grow h-px bg-gray-700"></div>
          </div>
          
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-1">Must be at least 8 characters.</p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm"
            >
              Sign Up
            </button>
          </form>
          
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              Already have an account? 
              <a href="#" className="text-purple-500 hover:text-purple-400 ml-1">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
