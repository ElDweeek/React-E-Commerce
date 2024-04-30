import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Rating from '../components/Rating';
import { useFetch } from '../hooks/useFetch';



const EngProducts = () => {

  const engProducts = useFetch('http://localhost:4000/engProducts');

  return (

    <>
      <h2 className="text-center">English Books</h2>
      <div className="engBtns-container">
        <ul className="engSlider container slidding">
          {engProducts.map((engProducts) =>
            <li key={engProducts.id}>
              <div className="box">
                <div className="box-img">
                  <a href={"/#/info/" + (engProducts._id)} draggable="false">
                    <img
                      src={engProducts.image}
                      alt={engProducts.name}
                      draggable="false"
                    />
                  </a>
                </div>
                <div className="box-content">
                  <a href={"/#/info/" + (engProducts._id)} draggable="false">
                    <h5>
                      {engProducts.name}
                    </h5>
                  </a>
                  <div className="book-rating">
                    <span>
                      {Rating({ value: engProducts.rating })
                      }
                    </span>
                    <span>
                      {engProducts.numReview + " reviews"}
                    </span>
                  </div>
                  <p>
                    Price:
                    <span>
                      $ {engProducts.price}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          )}
        </ul>
        <span className="books-btn" id="engLeft">
          <FontAwesomeIcon icon={faAngleLeft} aria-hidden="true" />
        </span>
        <span className="books-btn" id="engRight">
          <FontAwesomeIcon icon={faAngleRight} aria-hidden="true" />
        </span>
      </div>
    </>
  )
}

export default EngProducts;