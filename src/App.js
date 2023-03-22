import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { CoolComponent } from './coolComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}> Add count </button>
      {count > 1 && <CoolComponent />}
      </header>
    </div>
  );
}

export default App;
