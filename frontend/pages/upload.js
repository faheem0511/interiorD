// pages/upload.js
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Upload() {
  const router = useRouter();
  const [form, setForm] = useState({
    userId: "testuser",
    roomImage: "",
    dimensions: { length: "", width: "" },
    style: "Modern",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/design", form);
      alert("Design submitted!");
      router.push(`/design/${res.data._id}`); // ✅ redirect with design ID
    } catch (err) {
      console.error("Failed to submit design:", err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Upload Room Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({ ...form, roomImage: e.target.value })
          }
        />
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Length (ft)"
            className="w-1/2 border p-2 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                dimensions: { ...form.dimensions, length: e.target.value },
              })
            }
          />
          <input
            type="number"
            placeholder="Width (ft)"
            className="w-1/2 border p-2 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                dimensions: { ...form.dimensions, width: e.target.value },
              })
            }
          />
        </div>
        <select
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, style: e.target.value })}
        >
          <option>Modern</option>
          <option>Luxury</option>
          <option>Premium</option>
          <option>Minimalist</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate Design
        </button>
      </form>
    </div>
  );
}
