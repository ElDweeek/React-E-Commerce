// import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen';
import authorsApi from './api/authorsApi'
import engProductsApi from './api/engProductsApi'
import arProductsApi from './api/arProductsApi'
import { Nav } from './components/Nav';



function App() {
  const routerPath = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
      loader:authorsApi,engProductsApi,arProductsApi,
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
