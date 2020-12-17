import './styles/App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './views/Main';


function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
        < Header />
      </div>
        < Main />
    </div>
  < Footer />
</>
  );
}

export default App;