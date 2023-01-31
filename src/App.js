import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import BottomMenu from './features/bottom-menu/BottomMenu';
import Customers from './features/customers/Customers';
import Menu from './features/menu/Menu';
import NewCustomer from './features/new-customer/NewCustomer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Menu />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/new-customer" element={<NewCustomer />}></Route>
          </Routes>
        </main>

        <BottomMenu></BottomMenu>
      </BrowserRouter>
    </div>
  );
}

export default App;
