import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to MyStore 🛒</h1>
        <p>
          Discover amazing products at the best prices.
          Shop smart, shop easy.
        </p>

        <button className="shop-btn">
          Shop Now
        </button>
      </div>

      <div className="features">
        <div className="card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your products delivered quickly.</p>
        </div>

        <div className="card">
          <h3>💳 Secure Payment</h3>
          <p>100% safe and secure transactions.</p>
        </div>

        <div className="card">
          <h3>⭐ Best Quality</h3>
          <p>Only trusted and high-quality products.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;