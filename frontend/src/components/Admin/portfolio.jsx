"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Sidebar from "./sidebar";

export default function AdminPortfolio() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", category: "", image: null, preview: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(res.data);
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

      if (!editId) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/add`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/update/${editId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setForm({ title: "", category: "", image: null, preview: "" });
      setEditId(null);
      fetchItems();
    } catch (error) {
      console.error("Portfolio submit error:", error.response?.data || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, category: item.category, image: null, preview: item.image });
    setEditId(item._id);
    document.getElementById("portfolio-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setDeleteConfirm(null);
    fetchItems();
  };

  const cancelEdit = () => {
    setForm({ title: "", category: "", image: null, preview: "" });
    setEditId(null);
  };

  if (loading) {
    return (
      <div style={s.loaderWrap}>
        <style>{css}</style>
        <div style={s.loaderInner}>
          <div style={s.spinner} />
          <p style={s.loaderLabel}>Loading Portfolio</p>
        </div>
      </div>
    );
  }

  return (
       <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      <style>{css}</style>
    <Sidebar />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {/* ── Topbar ── */}
      <header style={s.topbar}>
        {/* <button style={s.backBtn} onClick={() => router.push("/admin")} className="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back</span>
        </button> */}

        <div style={s.topbarCenter}>
          <h1 style={s.topbarTitle}>Portfolio</h1>
        </div>

        <div style={s.topbarRight}>
          <span style={s.itemCount}>{items.length} item{items.length !== 1 ? "s" : ""}</span>
        </div>
      </header>

      <div className="max-w-9xl mt-8 py-2 sm:px-6 lg:px-12">

        {/* ── Form Card ── */}
        <section id="portfolio-form" style={s.formCard}>
          <div style={s.formCardTop}>
            <div>
              <p style={s.formEyebrow}>{editId ? "Editing item" : "New item"}</p>
              <h2 style={s.formTitle}>{editId ? "Update Portfolio Item" : "Add Portfolio Item"}</h2>
            </div>
            {editId && (
              <button style={s.cancelBtn} onClick={cancelEdit} className="cancel-btn">
                Cancel
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} style={s.form}>
            <div style={s.formRow}>
              <div style={s.fieldGroup}>
                <label style={s.label}>Title <span style={s.req}>*</span></label>
                <input
                  type="text"
                  placeholder="e.g. Modern Living Room"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  style={s.input}
                  className="field-input"
                  required
                />
              </div>
              <div style={s.fieldGroup}>
                <label style={s.label}>Category <span style={s.req}>*</span></label>
                <input
                  type="text"
                  placeholder="e.g. Interior, Branding"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  style={s.input}
                  className="field-input"
                  required
                />
              </div>
            </div>

            {/* Upload Zone */}
            <div style={s.fieldGroup}>
              <label style={s.label}>Image {!editId && <span style={s.req}>*</span>}</label>
              <label style={s.uploadZone} className="upload-zone">
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) setForm({ ...form, image: file, preview: URL.createObjectURL(file) });
                  }}
                />
                {form.preview ? (
                  <div style={s.uploadPreviewWrap}>
                    <img
                      src={form.preview.startsWith("blob:") ? form.preview : `http://localhost:5000/api${encodeURI(form.preview)}`}
                      alt="Preview"
                      style={s.uploadPreviewImg}
                    />
                    <div style={s.uploadOverlay}>
                      <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span style={s.uploadOverlayText}>Replace image</span>
                    </div>
                  </div>
                ) : (
                  <div style={s.uploadPlaceholder}>
                    <div style={s.uploadIcon}>
                      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <p style={s.uploadTitle}>Click to upload image</p>
                    <p style={s.uploadSub}>PNG, JPG, WEBP — max 10 MB</p>
                  </div>
                )}
              </label>
              {form.image && (
                <p style={s.fileName}>
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                  {form.image.name}
                </p>
              )}
            </div>

            <div style={s.formActions}>
              <button type="submit" disabled={isSubmitting} style={s.submitBtn} className="submit-btn">
                {isSubmitting ? (
                  <><div style={s.btnSpinner} />{editId ? "Updating…" : "Adding…"}</>
                ) : (
                  <>{editId ? "Update Item" : "Add Item"}</>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* ── Grid ── */}
        <section>
          <div style={s.gridHeader}>
            <h2 style={s.gridTitle}>Your Portfolio</h2>
          </div>

          {items.length === 0 ? (
            <div style={s.emptyState}>
              <div style={s.emptyIcon}>
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <h3 style={s.emptyTitle}>No items yet</h3>
              <p style={s.emptySub}>Add your first portfolio item using the form above.</p>
            </div>
          ) : (
            <div style={s.grid}>
              {items.map((item, idx) => (
                <div key={item._id} style={{ ...s.card, animationDelay: `${idx * 60}ms` }} className="portfolio-card">
                  <div style={s.cardImageWrap}>
                    <img
                      src={
                        item.image.startsWith("http")
                          ? item.image
                          : `http://localhost:5000/api${item.image}`
                      }
                      alt={item.title}
                      style={s.cardImage}
                      className="card-img"
                    />
                    <div style={s.cardImageOverlay} className="card-overlay">
                      <button style={s.overlayEditBtn} onClick={() => handleEdit(item)} className="overlay-btn">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                  </div>

                  <div style={s.cardBody}>
                    <span style={s.cardCategory}>{item.category}</span>
                    <h3 style={s.cardTitle}>{item.title}</h3>
                    <div style={s.cardActions}>
                      <button style={s.editBtn} onClick={() => handleEdit(item)} className="edit-btn">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>
                      <button style={s.deleteBtn} onClick={() => setDeleteConfirm(item._id)} className="delete-btn">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ── Delete Confirm Modal ── */}
      {deleteConfirm && (
        <div style={s.modalBackdrop} onClick={() => setDeleteConfirm(null)}>
          <div style={s.modal} onClick={(e) => e.stopPropagation()}>
            <div style={s.modalIcon}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
              </svg>
            </div>
            <h3 style={s.modalTitle}>Delete this item?</h3>
            <p style={s.modalSub}>This action cannot be undone. The item will be permanently removed from your portfolio.</p>
            <div style={s.modalActions}>
              <button style={s.modalCancel} onClick={() => setDeleteConfirm(null)} className="cancel-btn">Keep it</button>
              <button style={s.modalConfirm} onClick={() => handleDelete(deleteConfirm)} className="modal-confirm-btn">Yes, delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

/* ─── Styles ─── */
const s = {
  page: { minHeight: "100vh", background: "#f5f4f0", fontFamily: "'Instrument Sans', 'Helvetica Neue', sans-serif", color: "#1a1a1a" },

  // Loader
  loaderWrap: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f4f0" },
  loaderInner: { display: "flex", flexDirection: "column", alignItems: "center", gap: 14 },
  spinner: { width: 30, height: 30, border: "2px solid #ddd", borderTop: "2px solid #1a1a1a", borderRadius: "50%", animation: "spin 0.75s linear infinite" },
  loaderLabel: { margin: 0, fontSize: 13, color: "#888", letterSpacing: "0.04em" },

  // Topbar
  topbar: { background: "#fff", borderBottom: "1px solid #eaeae6", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 },
  backBtn: { display: "flex", alignItems: "center", gap: 7, background: "none", border: "none", cursor: "pointer", color: "#555", fontSize: 13, fontWeight: 500, fontFamily: "inherit", padding: "6px 10px 6px 4px", borderRadius: 8, transition: "color 0.15s" },
  topbarCenter: { position: "absolute", left: "50%", transform: "translateX(-50%)" },
  topbarTitle: { margin: 0, fontSize: 15, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.2px" },
  topbarRight: { display: "flex", alignItems: "center" },
  itemCount: { fontSize: 12, color: "#999", fontWeight: 500 },

  // Body
  body: { maxWidth: 1200, margin: "0 auto", padding: "36px 28px 64px" },

  // Form Card
  formCard: { background: "#fff", borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.05)", padding: "32px 36px", marginBottom: 40 },
  formCardTop: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 },
  formEyebrow: { margin: "0 0 4px", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#999" },
  formTitle: { margin: 0, fontSize: 20, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.3px" },
  cancelBtn: { background: "none", border: "1px solid #ddd", color: "#555", fontSize: 13, fontWeight: 500, padding: "7px 16px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" },
  form: { display: "flex", flexDirection: "column", gap: 24 },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 },
  fieldGroup: { display: "flex", flexDirection: "column", gap: 7 },
  label: { fontSize: 12, fontWeight: 600, color: "#444", letterSpacing: "0.02em" },
  req: { color: "#e53e3e" },
  input: { padding: "11px 14px", border: "1px solid #e8e8e4", borderRadius: 10, fontSize: 14, color: "#1a1a1a", background: "#fafaf8", fontFamily: "inherit", outline: "none", transition: "all 0.15s", width: "100%", boxSizing: "border-box" },

  // Upload
  uploadZone: { display: "block", border: "1.5px dashed #d8d8d4", borderRadius: 12, cursor: "pointer", overflow: "hidden", background: "#fafaf8", transition: "border-color 0.2s, background 0.2s", minHeight: 130 },
  uploadPlaceholder: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "32px 0" },
  uploadIcon: { width: 44, height: 44, borderRadius: 10, background: "#f0f0ec", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" },
  uploadTitle: { margin: 0, fontSize: 13, fontWeight: 600, color: "#444" },
  uploadSub: { margin: 0, fontSize: 11, color: "#aaa" },
  uploadPreviewWrap: { position: "relative", height: 160, overflow: "hidden" },
  uploadPreviewImg: { width: "100%", height: "100%", objectFit: "cover" },
  uploadOverlay: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, opacity: 0, transition: "opacity 0.2s" },
  uploadOverlayText: { color: "#fff", fontSize: 12, fontWeight: 600 },
  fileName: { display: "flex", alignItems: "center", gap: 5, margin: "6px 0 0", fontSize: 11, color: "#22c55e", fontWeight: 500 },

  // Submit
  formActions: { display: "flex", alignItems: "center", paddingTop: 4 },
  submitBtn: { display: "flex", alignItems: "center", gap: 8, background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s", letterSpacing: "-0.1px" },
  btnSpinner: { width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid #fff", borderRadius: "50%", animation: "spin 0.7s linear infinite" },

  // Grid
  gridHeader: { marginBottom: 20 },
  gridTitle: { margin: 0, fontSize: 18, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.3px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 },

  // Card
  card: { background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)", transition: "box-shadow 0.25s, transform 0.25s", animation: "fadeUp 0.4s ease both" },
  cardImageWrap: { position: "relative", height: 210, overflow: "hidden", background: "#f0f0ec" },
  cardImage: { width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" },
  cardImageOverlay: { position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: 12, transition: "background 0.25s", pointerEvents: "none" },
  overlayEditBtn: { background: "rgba(255,255,255,0.95)", border: "none", borderRadius: 8, padding: "7px 13px", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, color: "#1a1a1a", fontFamily: "inherit", opacity: 0, transform: "translateY(6px)", transition: "all 0.2s", pointerEvents: "all" },
  cardBody: { padding: "16px 18px 18px" },
  cardCategory: { fontSize: 10, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#999" },
  cardTitle: { margin: "5px 0 14px", fontSize: 15, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.2px", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  cardActions: { display: "flex", gap: 8, paddingTop: 12, borderTop: "1px solid #f0f0ec" },
  editBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "8px 0", fontSize: 12, fontWeight: 600, color: "#1a1a1a", background: "#f5f4f0", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s" },
  deleteBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "8px 0", fontSize: 12, fontWeight: 600, color: "#dc2626", background: "#fff5f5", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s" },

  // Empty
  emptyState: { background: "#fff", borderRadius: 14, padding: "64px 32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
  emptyIcon: { width: 56, height: 56, background: "#f0f0ec", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: "#aaa" },
  emptyTitle: { margin: "0 0 6px", fontSize: 17, fontWeight: 700, color: "#1a1a1a" },
  emptySub: { margin: 0, fontSize: 13, color: "#999" },

  // Modal
  modalBackdrop: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, animation: "fadeIn 0.15s ease" },
  modal: { background: "#fff", borderRadius: 18, padding: "36px 36px 32px", maxWidth: 400, width: "90%", boxShadow: "0 24px 80px rgba(0,0,0,0.18)", animation: "scaleUp 0.2s ease" },
  modalIcon: { width: 48, height: 48, background: "#fff5f5", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: "#dc2626" },
  modalTitle: { margin: "0 0 8px", fontSize: 18, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.3px" },
  modalSub: { margin: "0 0 24px", fontSize: 13, color: "#777", lineHeight: 1.6 },
  modalActions: { display: "flex", gap: 10 },
  modalCancel: { flex: 1, padding: "11px 0", background: "#f5f4f0", border: "none", borderRadius: 10, fontSize: 13, fontWeight: 600, color: "#555", cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s" },
  modalConfirm: { flex: 1, padding: "11px 0", background: "#dc2626", border: "none", borderRadius: 10, fontSize: 13, fontWeight: 600, color: "#fff", cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s" },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; }
  body { margin: 0; }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes scaleUp { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }

  .back-btn:hover { color: #1a1a1a !important; background: #f5f4f0; }
  .field-input:focus { border-color: #1a1a1a !important; background: #fff !important; box-shadow: 0 0 0 3px rgba(26,26,26,0.07); }
  .upload-zone:hover { border-color: #aaa !important; background: #f0f0ec !important; }
  .upload-zone:hover .card-overlay { opacity: 1 !important; }
  .submit-btn:hover:not(:disabled) { background: #333 !important; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,0,0,0.15); }
  .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .cancel-btn:hover { background: #f5f4f0 !important; color: #1a1a1a !important; }
  .portfolio-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06) !important; transform: translateY(-2px); }
  .portfolio-card:hover .card-img { transform: scale(1.04); }
  .portfolio-card:hover .card-overlay { background: rgba(0,0,0,0.25) !important; }
  .portfolio-card:hover .card-overlay button { opacity: 1 !important; transform: translateY(0) !important; }
  .edit-btn:hover { background: #eceae6 !important; }
  .delete-btn:hover { background: #fee2e2 !important; }
  .modal-confirm-btn:hover { background: #b91c1c !important; }
  @media (max-width: 640px) {
    .form-row { grid-template-columns: 1fr !important; }
  }
`;