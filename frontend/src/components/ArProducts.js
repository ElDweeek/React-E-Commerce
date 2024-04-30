import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Rating from '../components/Rating';
import { useFetch } from '../hooks/useFetch';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ArProducts = () => {

  const arProducts = useFetch('http://localhost:4000/arProducts');

  return (

    <>
      <h2 className="text-center mt-5">Arabic Books</h2>
      <div className="arBtns-container">
        
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {arProducts.map((arProducts) => 
      <SwiperSlide key={arProducts.id}>
        <div className="box">
                <div className="box-img">
                  <a href={"/#/info/" + (arProducts._id)} draggable="false">
                    <img
                      src={arProducts.image}
                      alt={arProducts.name}
                      draggable="false"
                    />
                  </a>
                </div>
                <div className="img-content">
                  <a href={"/#/info/" + (arProducts._id)} draggable="false">
                    <h5>
                      {arProducts.name}
                    </h5>
                  </a>
                  <div className="book-rating">
                    <span>
                      {Rating({ value: arProducts.rating })
                      }
                    </span>
                    <span>
                      {arProducts.numReview + " reviews"}
                    </span>
                  </div>
                  <p>
                    Price:
                    <span>
                      {arProducts.price}
                    </span>
                  </p>
                </div>
              </div>
      </SwiperSlide>

      )}
  
      
    </Swiper>
        
        
        
        {/* <ul className="arSlider container slidding">
          {arProducts.map((arProducts) =>
            <li key={arProducts.id}>
              <div className="box">
                <div className="box-img">
                  <a href={"/#/info/" + (arProducts._id)} draggable="false">
                    <img
                      src={arProducts.image}
                      alt={arProducts.name}
                      draggable="false"
                    />
                  </a>
                </div>
                <div className="img-content">
                  <a href={"/#/info/" + (arProducts._id)} draggable="false">
                    <h5>
                      {arProducts.name}
                    </h5>
                  </a>
                  <div className="book-rating">
                    <span>
                      {Rating({ value: arProducts.rating })
                      }
                    </span>
                    <span>
                      {arProducts.numReview + " reviews"}
                    </span>
                  </div>
                  <p>
                    Price:
                    <span>
                      {arProducts.price}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          )}
        </ul> */}
        {/* <span className="books-btn" id="engLeft">
          <FontAwesomeIcon icon={faAngleLeft} aria-hidden="true" />
        </span>
        <span className="books-btn" id="engRight">
          <FontAwesomeIcon icon={faAngleRight} aria-hidden="true" />
        </span> */}
      </div>
    </>
  )
}

export default ArProducts;