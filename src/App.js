import "./App.css";
import { Allroute } from "./components/Allroute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroute />
      <Footer/>
    </div>
  );
}

export default App;
