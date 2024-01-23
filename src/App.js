import './App.css';
import GraphHeader from './components/GraphHeader';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
 
  return (
    <div className="App">
     {/* <Header/> */}
     <Sidebar/>
     <GraphHeader/>
    </div>
  );
}

export default App;
