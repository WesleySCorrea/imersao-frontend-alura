import './App.css';
import Footer from './Footer/footer';
import Header from './Header/header';
import Main from './Main/main';
import Sidebar from './Sidebar/sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
