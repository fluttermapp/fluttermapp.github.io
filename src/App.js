import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website maintenance (2 days left)
        </p>
        <a
          className="App-link"
          href="https://sso.teachable.com/secure/1086263/identity/login/password"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login (Online courses - Teachable)
        </a>
      </header>
    </div>
  );
}

export default App;
