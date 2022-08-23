
import '../App.css';
import Navbar from '../Components/Navbar';
import ApBar from '../Components/Apbar';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import Display from '../Components/Display';

function Home() {
  
  return (
    <div className="App">

  <ApBar/>
  <Main />
  <Display />
  <Footer />
    </div>
  );
}

export default Home;
