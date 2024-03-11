import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen';
import Sasa from './Pages/Sasa';




function App() {
  const routerPath = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/sasa",
      element: <Sasa />,
    },
  ]);
  return (
    <>
      <NavBar />

      <RouterProvider router={routerPath} />

      <Footer />
    </>
  );
}

export default App;
