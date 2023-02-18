import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import BottomMenu from './features/bottom-menu/BottomMenu';
import Customers from './features/customers/Customers';
import Menu from './features/menu/Menu';
import NewCustomer from './features/new-customer/NewCustomer';
import 'animate.css';
import Customer from './features/customer/Customer';
import Search from './features/search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/backoffice">
        <main>
          <Routes>
            <Route path="/" element={<Menu />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/new-customer" element={<NewCustomer />}></Route>
            <Route path="/customer/:id" element={<Customer />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </main>

        <BottomMenu></BottomMenu>
      </BrowserRouter>
    </div>
  );
}

export default App;
