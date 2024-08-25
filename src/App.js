import React from 'react';
import './App.css';  // CSSファイルのインポート

function App() {
  return (
    <div className="App">
      {/* ヘッダー */}
      <header className="App-header">
        <h1>マッチングアプリ</h1>
        <nav>
          <a href="#login">ログイン</a>
          <a href="#signup">サインアップ</a>
        </nav>
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
          <img src="A-1.png" alt="特徴1" />
          <h3>使いやすい</h3>
          <p>アプリはシンプルで使いやすいです。</p>
        </div>
        <div className="feature-item">
          <img src="B-1.png" alt="特徴2" />
          <h3>安全・安心</h3>
          <p>プライバシーは最優先です。</p>
        </div>
        <div className="feature-item">
          <img src="C-1.png" alt="特徴3" />
          <h3>本物のつながり</h3>
          <p>あなたの興味や価値観を共有する人と出会えます。</p>
        </div>
      </section>

      {/* フッター */}
      <footer>
        <p>&copy; 2024 マッチングアプリ. 全著作権所有。</p>
        <nav>
          <a href="#privacy">プライバシーポリシー</a>
          <a href="#terms">利用規約</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
