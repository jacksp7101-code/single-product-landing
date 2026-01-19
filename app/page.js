"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  async function submitOrder() {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone })
    });

    if (res.ok) {
      setStatus("✅ Order placed successfully!");
      setName("");
      setPhone("");
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>🔥 Smart Product</h1>
      <p>Best product for your daily life.</p>

      <h3>Place Your Order</h3>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      <button onClick={submitOrder}>Order Now</button>

      <p>{status}</p>
    </main>
  );
}
