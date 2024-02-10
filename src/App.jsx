import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ButtonExample from "./components/ButtonExample";


function App() {
  const [count, setCount] = useState("hello");


  return (
    <>
      <Header />
      <h2>Counters</h2>
      <ButtonExample count={count} />
      <ButtonExample count={count} />
      <Main />
      <Footer count={count}/>
    </>
  );
}

export default App;
