"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Login failed");
        setIsLoading(false);
        return;
      }

      // Save token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect based on role
      if (data.user.role === "admin") {
        router.push("/Admin/portfolio"); // Admin panel
      } else {
        router.push("/"); // Regular user dashboard
      }
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.API_URL}/api/auth/google`;
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-decorilla-blue/10">
      {/* Left Side - Full Page Image */}
      <div className="h-48 lg:h-auto lg:flex-1 relative overflow-hidden">
        <img 
          src="/h3.jpg" 
          alt="Login Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Optional: Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Optional: Gradient overlay for modern look */}
        <div className="absolute inset-0 bg-decorilla-blue/20 to-purple-600/30"></div>
        
        {/* Floating Particles - Hidden on mobile */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute top-20 left-20 w-3 h-3 bg-white bg-opacity-70 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-32 right-24 w-2 h-2 bg-white bg-opacity-50 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-32 w-4 h-4 bg-white bg-opacity-60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-16 w-2 h-2 bg-white bg-opacity-40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-black mb-4 drop-shadow-lg">DecorAI</h1>
        </div>
        
        {/* Welcome Text - Hidden on mobile, visible on desktop */}
        <div className="absolute bottom-8 left-8 right-8 lg:bottom-16 lg:left-16 lg:right-16 text-center z-10 hidden lg:block">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Welcome Back!</h1>
          <p className="text-lg text-white opacity-90 drop-shadow-md">Sign in to continue your journey</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="bg-white lg:bg-decorilla-blue/10 p-6 sm:p-8 rounded-2xl shadow-xl border border-white lg:border-black">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
              <p className="text-sm sm:text-base text-gray-500">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-decorilla-blue text-white py-3 sm:py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-sm sm:text-base text-gray-600">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                  Create one here
                </a>
              </p>
            </div>

            {/* Social Login Options */}
            <div className="mt-5 sm:mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <button 
                  onClick={handleGoogleLogin}
                  type="button"
                  className="w-full inline-flex justify-center py-2.5 sm:py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2">Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}