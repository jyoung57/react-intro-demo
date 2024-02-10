import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ButtonExample from "./components/ButtonExample";

function App() {
  return (
    <>
      <Header/>
      <h1>Counters that update separately</h1>
      <ButtonExample />
      <ButtonExample />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
