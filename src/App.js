import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import BottomMenu from './features/bottom-menu/BottomMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            
          </Routes>
        </main>

        <BottomMenu></BottomMenu>
      </BrowserRouter>
    </div>
  );
}

export default App;
