import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Demo from './Demo'

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <Demo></Demo>
    </div>
  );
}

export default App;
