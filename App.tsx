import * as React from 'react';
import './style.css';

export default function App() {
  const age = 15;
  const isGreen = false;

  if (age >= 18) {
    return (
      <div>
        <h1>Can Vote</h1>
        {age >= 18 ? <button style={{ cursor: 'pointer' }}>Vote</button> : ''}
      </div>
    );
  }

  return (
    <div>
      <h3>No vote</h3>
      <h1 style={{ color: isGreen ? 'green' : 'red' }}>Not eligible to Vote</h1>
    </div>
  );
}

<h1>Some text here</h1>;
