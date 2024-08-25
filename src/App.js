import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AboutUs from './AboutUs';
import Company from './Company';
import Service from './Service';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>カラコミ</h1>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/about-us">About Us</Link>
            <Link to="/company">Company</Link>
            <Link to="/service">Service</Link>
            <Link to="/login" className="login-btn">ログイン</Link>
            <Link to="/signup" className="login-btn">新規登録</Link>
          </nav>
          <Link to="/login" className="login-btn">ログイン</Link>
        </header>

        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/company" element={<Company />} />
          <Route path="/service" element={<Service />} />
          <Route path="/" element={
            <>
              <section className="hero">
                <h2>理想の相手を見つけよう</h2>
                <p>数百万の他のユーザーと一緒に、真実の愛を見つけましょう。</p>
                <button>始める</button>
              </section>

              {/* サービスの特徴 */}
              <section className="features">
                <div className="feature-item">
                  <img src="feature1-icon.png" alt="特徴1" />
                  <h3>使いやすい</h3>
                  <p>アプリはシンプルで使いやすいです。</p>
                </div>
                <div className="feature-item">
                  <img src="feature2-icon.png" alt="特徴2" />
                  <h3>安全・安心</h3>
                  <p>プライバシーは最優先です。</p>
                </div>
                <div className="feature-item">
                  <img src="feature3-icon.png" alt="特徴3" />
                  <h3>本物のつながり</h3>
                  <p>あなたの興味や価値観を共有する人と出会えます。</p>
                </div>
              </section>

              {/* フッター */}
              <footer>
                <p>&copy; 2024 カラコミ. 全著作権所有。</p>
                <nav className="footer-nav">
                  <a href="#privacy">プライバシーポリシー</a>
                  <span className="separator"> | </span>
                  <a href="#terms">利用規約</a>
                </nav>
              </footer>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
