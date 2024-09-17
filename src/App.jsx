import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/cart';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/cart' element = {<Cart/>} />
      </Route>
      <Route path='/signin' element = {<SignIn/>} />
      <Route path='/signup' element = {<SignUp/>} />

      </Route>
    )
  );

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
