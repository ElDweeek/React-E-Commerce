import ArProducts from "./ArProducts";
import EngProducts from "./EngProducts";


import '../Css/books.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";


const Books = () => {
  return (
    <>
    <div className="books">
          <div className="container">
            <div className="heading text-center">
              <h1>Books
              <FontAwesomeIcon icon={faBookBookmark} className="book-svg"/>
              </h1>
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