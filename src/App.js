import './App.css';
import Header from './component/header/Header';
import { MyRoutes } from './config/MyRoutes';
import Footer from './component/footer/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <MyRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
