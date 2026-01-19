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
