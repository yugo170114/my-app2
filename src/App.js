import React, { useState } from 'react';
import './App.css';  // CSSファイルのインポート

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* ヘッダー */}
      <header className="App-header">
        <h1>カラコミ</h1>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about-us">About Us</a>
          <a href="#company">Company</a>
          <a href="#service">Service</a>
          <a href="#login">ログイン</a>
          <a href="#signup">新規登録</a>
        </nav>
        <a href="#login" className="login-btn">ログイン</a>
      </header>

      {/* ヒーローセクション */}
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
    </div>
  );
}

export default App;
