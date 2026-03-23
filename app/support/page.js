"use client";

import React from "react";

export default function SupportPage() {
  const buyMeACoffeeUrl = "https://buymeacoffee.com/rugvedjoshi"; 
  // 👆 Replace with your real Buy Me A Coffee link

  const tiers = [
    { label: "₹50" },
    { label: "₹100" },
    { label: "₹250" },
    { label: "₹500" },
  ];

  const handleSupportClick = () => {
    window.open(buyMeACoffeeUrl, "_blank");
  };

  return (
    <div className="container py-5">
      <h1 className="section-title text-center mb-3">Support My Work</h1>
      <p className="text-center mb-5" style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto 3rem', color: '#ffffff' }}>
        If you like what I build — AI tools, research projects, experiments —
        you can support me with a small contribution. It helps me dedicate more
        time and resources to these ideas.
      </p>

      <div className="row g-4">
        {/* Left Card */}
        <div className="col-lg-7">
          <div className="glass-card p-4">
            <h2 className="h5 mb-4">Choose a one-time amount</h2>

            <div className="d-flex flex-wrap gap-3 mb-4">
              {tiers.map((tier) => (
                <button
                  key={tier.label}
                  type="button"
                  onClick={handleSupportClick}
                  style={{
                    minWidth: "100px",
                    padding: "10px 18px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.4)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.08)";
                  }}
                >
                  {tier.label}
                </button>
              ))}
            </div>

            <button
              className="btn btn-glass"
              onClick={handleSupportClick}
            >
              Support via Buy Me a Coffee
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="col-lg-5">
          <div className="glass-card p-4">
            <h3 className="h6 mb-3">What your support enables</h3>
            <ul>
              <li>Time to work on open-source and research projects.</li>
              <li>Better infrastructure for training & experiments.</li>
              <li>More content, write-ups and tutorials I can share.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
