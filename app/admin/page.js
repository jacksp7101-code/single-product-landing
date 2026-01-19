export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee"
      }}>
        <h2>FitPro</h2>
        <button style={{ padding: "10px 20px" }}>Buy Now</button>
      </nav>

      {/* HERO */}
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "60px 40px",
        alignItems: "center"
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "42px" }}>Smart Fitness Watch</h1>
          <p style={{ fontSize: "18px", margin: "20px 0" }}>
            Track your health, fitness, and sleep with our premium smart watch.
          </p>
          <h2 style={{ fontSize: "32px", color: "#e63946" }}>৳ 2,999</h2>
          <button style={{
            marginTop: "20px",
            padding: "15px 30px",
            fontSize: "16px"
          }}>
            Order Now
          </button>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/400"
            alt="Product"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 40px", background: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center" }}>Key Features</h2>
        <ul style={{
          maxWidth: "600px",
          margin: "30px auto",
          fontSize: "18px"
        }}>
          <li>✔ Heart Rate & Step Tracking</li>
          <li>✔ Waterproof Design</li>
          <li>✔ 7 Days Battery Backup</li>
          <li>✔ Android & iOS Compatible</li>
        </ul>
      </section>

      {/* DESCRIPTION */}
      <section style={{ padding: "60px 40px" }}>
        <h2>Product Description</h2>
        <p style={{ maxWidth: "800px", fontSize: "18px" }}>
          The Smart Fitness Watch is designed for modern lifestyles.
          Monitor your workouts, sleep patterns, and daily activity
          with precision and style.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "60px 40px", background: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center" }}>Customer Reviews</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "30px"
        }}>
          <div style={{ border: "1px solid #ddd", padding: "20px", width: "250px" }}>
            ⭐⭐⭐⭐⭐
            <p>"Amazing quality and battery life."</p>
            <b>— Rahim</b>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", width: "250px" }}>
            ⭐⭐⭐⭐⭐
            <p>"Worth the price. Very satisfied."</p>
            <b>— Ayesha</b>
          </div>
        </div>
      </section>

      {/* PRICE CTA */}
      <section style={{
        padding: "60px 40px",
        textAlign: "center"
      }}>
        <h2>Only ৳ 2,999</h2>
        <p>Free Delivery | Cash on Delivery</p>
        <button style={{
          marginTop: "20px",
          padding: "15px 40px",
          fontSize: "18px"
        }}>
          Buy Now
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "20px",
        textAlign: "center",
        background: "#111",
        color: "#fff"
      }}>
        © 2026 FitPro. All rights reserved.
      </footer>

    </main>
  );
}
