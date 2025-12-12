// pages/design/[id].js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function DesignDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:5000/api/design/${id}`)
      .then((res) => {
        setDesign(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load design:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!design) return <div className="p-10 text-center">Design not found.</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Design Preview</h1>
      <img
        src={design.roomImage}
        alt="Room"
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p><strong>Style:</strong> {design.style}</p>
      <p><strong>Dimensions:</strong> {design.dimensions.length}ft x {design.dimensions.width}ft</p>
      <p><strong>Submitted by:</strong> {design.userId}</p>
    </div>
  );
}
