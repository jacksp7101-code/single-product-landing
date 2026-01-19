"use client";

import { useEffect, useState } from "react";

export default function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>📦 Orders Dashboard</h1>

      {orders.map(order => (
        <div key={order.id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
          <p><b>Name:</b> {order.name}</p>
          <p><b>Phone:</b> {order.phone}</p>
        </div>
      ))}
    </main>
  );
}
