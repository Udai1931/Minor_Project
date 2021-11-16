import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Stocks from "./Components/Stocks";
import DetailStock from "./Components/DetailStock";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Stocks/>
      <DetailStock/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
