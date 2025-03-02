import React, { useState, useEffect } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile view on mount and when window resizes
  useEffect(() => {
    const checkForMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };
    
    // Set initial value
    checkForMobile();
    
    // Add event listener
    window.addEventListener('resize', checkForMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkForMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Signing in with:', { email, password });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden">
      {/* Left Panel - Hidden on mobile, visible on md and up */}
      <div className="hidden md:flex md:w-full lg:w-1/2 relative flex-col items-center justify-center">
        {/* Purple Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-black opacity-80 rounded-lg m-4"></div>
        
        <div className="z-10 flex flex-col items-center px-4">
          
          {/* Main Text */}
          <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-sm mb-10 text-center">Sign in to your account to continue.</p>
          
          {/* Steps */}
          <div className="w-full max-w-xs">
            <button className="bg-white text-black w-full py-2 rounded-md flex items-center justify-center mb-3">
              <span className="mr-2">1</span>
              <span>Sign in your account</span>
            </button>
            
            <button className="bg-gray-800 w-full py-2 rounded-md flex items-center justify-center mb-3 opacity-70">
              <span className="mr-2">2</span>
              <span>Set up your workspace</span>
            </button>
            
            <button className="bg-gray-800 w-full py-2 rounded-md flex items-center justify-center opacity-70">
              <span className="mr-2">3</span>
              <span>Set up your profile</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Logo - Only visible on small screens */}
      <div className="md:hidden pt-8 pb-4 flex flex-col items-center">
        <div className="flex items-center mb-2">
        </div>
        <h1 className="text-xl font-bold">Welcome Back</h1>
      </div>
      
      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-6 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-1">Sign In Account</h2>
          <p className="text-sm text-gray-400 mb-6">Enter your credentials to access your account.</p>
          
          {/* OAuth Buttons */}
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
          
          {/* Divider */}
          <div className="flex items-center mb-8">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>
          
          {/* Sign In Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-900 border border-gray-800 rounded-md py-2 px-3 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                inputMode="email"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-gray-900 border border-gray-800 rounded-md py-2 px-3 text-sm pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex flex-col xs:flex-row justify-between mt-2">
                <div className="text-xs text-gray-500 mb-1 xs:mb-0">Must be at least 8 characters.</div>
                <a href="#" className="text-xs text-purple-400">Forgot password?</a>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-md font-medium mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 active:bg-purple-800 transition-colors"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-center text-sm">
            <span className="text-gray-500">Don't have an account?</span>{" "}
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
