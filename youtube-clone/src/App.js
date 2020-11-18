// import { Sidebar } from 'semantic-ui-react';
import './App.css';
// import TopBar from './components/TopBar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainGallery from './components/MainGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainGallery />
    </div>
  );
}

export default App;
