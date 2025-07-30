import { useState } from "react";
import api from "../utils/api";
import { useRouter } from "next/router";
import './_app.js'; 

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("http://localhost:5000/api/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      router.push("/upload");
      // ✅ Save token to localStorage
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Log In
        </button>

        <p className="text-sm mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
