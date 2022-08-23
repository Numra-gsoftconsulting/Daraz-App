import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ApBar from './Components/Apbar';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">
  <Navbar/>
  <ApBar/>
  <Main />
  <Footer />
    </div>
  );
}

export default App;
