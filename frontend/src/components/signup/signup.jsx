"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters long");
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
        form,
        { withCredentials: true }
      );

      if (!data?.success) {
        throw new Error(data?.message || "Signup failed");
      }

      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-decorilla-blue/50">
      {/* Left Image */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        <img
          src="/h1.jpg"
          alt="Signup"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have one?{" "}
              <a
                href="/login"
                className="font-semibold text-decorilla-blue hover:underline"
              >
                Login
              </a>
            </p>
          </div>

          {/* Alerts */}
          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-600">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-decorilla-blue outline-none disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-decorilla-blue outline-none disabled:opacity-50"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full rounded-xl border px-4 py-3 pr-12 focus:ring-2 focus:ring-decorilla-blue outline-none disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 w-full rounded-2xl bg-decorilla-blue py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed"
            >
              {isLoading && <Loader2 className="animate-spin" size={18} />}
              {isLoading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
