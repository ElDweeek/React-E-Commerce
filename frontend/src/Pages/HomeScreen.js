// import axios from 'axios'
import React from 'react'

import LandingSection from '../components/LandingSection';
import Authors from '../components/Authors';
import VideoSection from '../components/VideoSection';
import Books from '../components/Books';



const HomeScreen = () => {


  // const [authors, setAuthors] = useState([]);
  // const [arProducts, setArProducts] = useState([]);
  // const [engProducts, setEngProducts] = useState([]);

  // useEffect(() => {
  //   const authors = async () => {
  //     const response = await axios.get("http://localhost:4000/authors")
  //     setAuthors(response.data)
  //   }
  //   authors()

  // }, [])
  // useEffect(() => {
  //   const arProducts = async () => {
  //     const response = await axios.get("http://localhost:4000/arProducts")
  //     setArProducts(response.data)
  //   }
  //   arProducts()
  // }, [])
  // useEffect(() => {
  //   const engProducts = async () => {
  //     const response = await axios.get("http://localhost:4000/engProducts")
  //     setEngProducts(response.data)
  //   }
  //   engProducts()
  // }, [])


  return (

    <>

      <main>
        <LandingSection />
        < Authors />
        < VideoSection />
        < Books />
      </main>

    </>

  )
};

export default HomeScreen;
