"use client";

import { useState } from "react";
import GlassCard from "../../components/GlassCard";

export default function ConnectPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // 📤 Send data to backend (NO CAPTCHA)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="section-title">Connect With Me</h1>
      <p className="section-subtitle mb-4">
        Have a project idea, collaboration, or just want to say hi? Drop a message here.
      </p>

      <GlassCard>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control bg-transparent text-light"
              required
            />
          </div>

          <div className="col-md-6">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="form-control bg-transparent text-light"
              required
            />
          </div>

          <div className="col-12">
            <label>Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="form-control bg-transparent text-light"
              required
            />
          </div>

          <div className="col-12 d-flex justify-content-between align-items-center">
            <button className="btn btn-glass" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            <span style={{ fontSize: "0.85rem" }}>{status}</span>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}
