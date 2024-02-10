import React from 'react';
import { useState } from 'react';


export default function ButtonExample() {
  
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
    );
  }