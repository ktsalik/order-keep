import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import BottomMenu from './features/bottom-menu/BottomMenu';
import Customers from './features/customers/Customers';
import Menu from './features/menu/Menu';
import NewCustomer from './features/new-customer/NewCustomer';
import 'animate.css';
import Customer from './features/customer/Customer';
import Search from './features/search/Search';
import UnderConstruction from './features/under-construction/UnderConstruction';
import NewOrder from './features/new-order/NewOrder';
import Orders from './features/orders/Orders';
import Order from './features/order/Order';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/customers-manager">
        <main>
          <Routes>
            <Route path="/" element={<Menu />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/new-customer" element={<NewCustomer />}></Route>
            <Route path="/customer/:id" element={<Customer />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/new-order" element={<NewOrder />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/order/:id" element={<Order />}></Route>
            <Route path="/under-construction" element={<UnderConstruction />}></Route>
          </Routes>
        </main>

        <BottomMenu></BottomMenu>
      </BrowserRouter>
    </div>
  );
}

export default App;
