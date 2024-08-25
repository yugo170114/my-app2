import React from 'react';
import './App.css';  // CSSファイルのインポート

function App() {
  return (
    <div className="App">
      {/* ヘッダー */}
      <header className="App-header">
        <h1>My Matching App</h1>
        <nav>
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="hero">
        <h2>Find Your Perfect Match</h2>
        <p>Join millions of others and discover your true love.</p>
        <button>Get Started</button>
      </section>

      {/* サービスの特徴 */}
      <section className="features">
        <div className="feature-item">
          <img src="A-1.png" alt="Feature 1" />
          <h3>Easy to Use</h3>
          <p>Our app is simple and easy to navigate.</p>
        </div>
        <div className="feature-item">
          <img src="B-1.png" alt="Feature 2" />
          <h3>Safe & Secure</h3>
          <p>Your privacy is our top priority.</p>
        </div>
        <div className="feature-item">
          <img src="C-1.png" alt="Feature 3" />
          <h3>Find Real Connections</h3>
          <p>Meet people who share your interests and values.</p>
        </div>
      </section>

      {/* フッター */}
      <footer>
        <p>&copy; 2024 My Matching App. All rights reserved.</p>
        <nav>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
