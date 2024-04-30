import ArProducts from "./ArProducts";
import EngProducts from "./EngProducts";


import '../Css/books.css'


const Books = () => {
  return (
    <>
    <div className="books">
          <div className="container">
            <div className="heading text-center">
              <h1>Books</h1>
            </div>
            <div className="engProducts-container">
              < EngProducts />
            </div>
            <div className="arProducts-container">
              < ArProducts />
            </div>
            
            
          </div>
        </div>
    </>
  )
}

export default Books;