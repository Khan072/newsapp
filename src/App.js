import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Newsboard from './components/Newsboard';
import NewsItem from './components/NewsItem';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Newsboard/>
      <NewsItem/>
      <Footer/>
    </div>

  );
}

export default App;
