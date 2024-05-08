import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// import NavBar from './components/NavBar'
import  Nav  from './components/Nav';
import Footer from './components/Footer';
import HomeScreen from './Pages/HomeScreen';
import AboutScreen from './Pages/AboutScreen';
import AuthorsScreen from './Pages/AuthorsScreen';
import BooksScreen from './Pages/BooksScreen';
import CartScreen from './Pages/CartScreen';
import ContactUsScreen from './Pages/ContactUsScreen';
import DashboardScreen from './Pages/DashboardScreen';
import Error404Screen from './Pages/Error404Screen';
import InfoScreen from './Pages/InfoScreen';
import OrderScreen from './Pages/OrderScreen';
import PaymentScreen from './Pages/PaymentScreen';
import PlaceOrderScreen from './Pages/PlaceOrderScreen';
import ProfileScreen from './Pages/ProfileScreen';
import RegisterScreen from './Pages/RegisterScreen';
import ShippingScreen from './Pages/ShippingScreen';
import SignInScreen from './Pages/SingInScreen';



function App() {
  const routerPath = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/about",
      element: <AboutScreen />,
    },
    {
      path: "/authors",
      element: <AuthorsScreen />,
    },
    {
      path: "/books",
      element: <BooksScreen />,
    },
    {
      path: "/cart",
      element: <CartScreen />,
    },
  
    {
      path: "/contact",
      element: <ContactUsScreen />,
    },
    {
      path: "/dashboard",
      element: <DashboardScreen />,
    },
    {
      path: "/error404",
      element: <Error404Screen />,
    },
  
    {
      path: "/info",
      element: <InfoScreen />,
    },
    {
      path: "/order",
      element: <OrderScreen />,
    },
    {
      path: "/payment",
      element: <PaymentScreen />,
    },
    {
      path: "/placeorder",
      element: <PlaceOrderScreen />,
    },
  
    {
      path: "/profile",
      element: <ProfileScreen />,
    },
    {
      path: "/register",
      element: <RegisterScreen />,
    },
    {
      path: "/shipping",
      element: <ShippingScreen />,
    },
    {
      path: "/signin",
      element: <SignInScreen />,
    },
  
  ]);
  return (
    <>
      <Nav />

      <RouterProvider router={routerPath} />

      <Footer />
    </>
  );
}

export default App;
