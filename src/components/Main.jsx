import React from 'react';
import '../styles/Main.css';
import { useState } from 'react';

export default function Main() {
  const fruit = 'Blueberry';

  const age = 20;

  const someFruits = ['blueberry', 'apple', 'banana'];

  const [count, setCount] = React.useState(0);

  function handleButtonClick () {
    setCount(count+1)
    console.log(setCount)
  }

  return (
    <main>
      {fruit}
      <br />
      {age >= 21 ? 'Beer' : 'Juice'}
      <br />
      {(fruit == 'Blueberry' && 'Blue Berry Time') || 'null'}
      <br />
      {someFruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      <br />

      <p>Counter is: {count}</p>
      <button onClick={handleButtonClick}>Click Me</button>

      <p>
        This is an intro to react Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Libero ipsa impedit laboriosam, voluptatibus
        repudiandae tempore, architecto porro harum sunt quo expedita, labore
        temporibus? Quod saepe consequatur dolorum officiis, nostrum iusto.
        Fugiat repellendus enim corrupti esse modi excepturi ipsa ea mollitia,
        fugit labore tempora eaque possimus deleniti libero illo praesentium
        perferendis doloribus illum aliquam autem! Enim accusantium harum
        incidunt deleniti. Tempore.
      </p>
    </main>
  );
}
