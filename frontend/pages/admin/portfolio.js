"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPortfolio() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", category: "", image: null });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // ✅ Check admin role before loading
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
      return;
    }

    const user = JSON.parse(userData);
    if (user.role !== "admin") {
      router.push("/dashboard");
      return;
    }

    fetchItems();
  }, []);

  // Fetch portfolio items from backend
  const fetchItems = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/portfolio", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("category", form.category);
      if (form.image) formData.append("image", form.image);
      if (editId) formData.append("id", editId);

      const method = editId ? "PUT" : "POST";
      await fetch("http://localhost:5000/api/portfolio", {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      setForm({ title: "", category: "", image: null });
      setEditId(null);
      fetchItems();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, category: item.category, image: null });
    setEditId(item._id);
    // Scroll to form
    document.getElementById("portfolio-form").scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    
    const token = localStorage.getItem("token");
    await fetch("http://localhost:5000/api/portfolio", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });
    fetchItems();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-decorilla-blue border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Checking permissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-decorilla-blue bg-clip-text text-transparent mb-4">
            Portfolio Management
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Manage your portfolio items with ease. Add, edit, or remove projects to showcase your work.
          </p>
        </div>

        {/* Add/Edit Form */}
        <div id="portfolio-form" className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {editId ? "Edit Portfolio Item" : "Add New Portfolio Item"}
            </h2>
            <p className="text-gray-500 mt-1">
              {editId ? "Update the details below" : "Fill in the details to add a new item"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  placeholder="Enter project title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-decorilla-blue focus:border-decorilla-blue transition-all duration-200 bg-gray-50 hover:bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Web Design, Branding"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-decorilla-blue focus:border-decorilla-blue transition-all duration-200 bg-gray-50 hover:bg-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Image {!editId && "*"}
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">{form.image ? form.image.name : "PNG, JPG, WEBP (MAX. 10MB)"}</p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-decorilla-blue text-white rounded-xl font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    {editId ? "Updating..." : "Adding..."}
                  </>
                ) : (
                  editId ? "Update Item" : "Add Item"
                )}
              </button>

              {editId && (
                <button
                  type="button"
                  onClick={() => {
                    setForm({ title: "", category: "", image: null });
                    setEditId(null);
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Portfolio Grid */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Portfolio Items</h2>
            <p className="text-gray-500">
              {items.length} item{items.length !== 1 ? 's' : ''} in your portfolio
            </p>
          </div>

          {items.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No portfolio items yet</h3>
                <p className="text-gray-500 mb-6">Get started by adding your first portfolio item using the form above.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-decorilla-blue/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`http://localhost:5000${item.image}`}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-1">{item.title}</h3>
                    <p className="text-decorilla-blue font-medium text-sm mb-4">{item.category}</p>
                    
                    <div className="flex gap-3 pt-3 border-t border-gray-100">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex-1 py-2 px-3 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="flex-1 py-2 px-3 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors duration-200 flex items-center justify-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}