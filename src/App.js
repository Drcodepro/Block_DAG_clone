import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className='top_container'>
     {/* image for the background */}
      <img src='./site_Background.png' alt="background" className='main_background' />
      <NavBar />
      <Home />
    </div>


  );
}

export default App;
