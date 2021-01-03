import './scss/App.scss';
import Header from './components/Header';
// import Main from './views/Main';
// import Contact from './views/Contact';
import Footer from './components/Footer';
// import { Products } from './views/Products';
import UnderConstruction from './views/UnderConstruction'



function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
        < Header />
      </div>
      < UnderConstruction />
        {/* < Main /> */}
        {/* < Products /> */}
        {/* < Contact /> */}
    </div>
  < Footer />
</>
  );
}

export default App;