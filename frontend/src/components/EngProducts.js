// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Rating from '../components/Rating';
import { useFetch } from '../hooks/useFetch';
 

import { Navigation, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const EngProducts = () => {

  const engProducts = useFetch('http://localhost:4000/engProducts');

  return (

    <>
      <h2 className="text-center">English Books</h2>
      <Swiper className="arSlider container slidding"
        // install Swiper modules
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-next-btn',
          prevEl: '.swiper-prev-btn',
          clickable: true
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {engProducts.map((engProducts) =>
          <SwiperSlide key={engProducts.id} id='swiper-slide'>
            <div className="box">
              <div className="box-img">
                <a href={"/info/" + (engProducts.id)} draggable="false">
                  <img
                    src={engProducts.image}
                    alt={engProducts.name}
                    draggable="false"
                  />
                </a>
              </div>
              <div className="img-content">
                <a href={"/info/" + (engProducts.id)} draggable="false">
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
                    {engProducts.price}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

        )}
        <div className="slider-controller">
          <div className="swiper-prev-btn">
            <ion-icon name="arrow-back-outline" ></ion-icon>
          </div>
          <div className="swiper-next-btn">
            <ion-icon name="arrow-forward-outline" ></ion-icon>
          </div>
        </div>

      </Swiper>



      {/* <div className="engBtns-container">
        <ul className="engSlider container slidding">
          {engProducts.map((engProducts) =>
            <li key={engProducts.id}>
              <div className="box">
                <div className="box-img">
                  <a href={"/info/" + (engProducts.id)} draggable="false">
                    <img
                      src={engProducts.image}
                      alt={engProducts.name}
                      draggable="false"
                    />
                  </a>
                </div>
                <div className="box-content">
                  <a href={"/info/" + (engProducts.id)} draggable="false">
                    <h5>
                      {engProducts.name}
                    </h5>
                  </a>
                  <div className="book-rating">
                    <span>
                      {Rating({ value: engProducts.rating })}
                    </span>
                    <span>
                      {engProducts.numReview + " reviews"}
                    </span>
                  </div>
                  <p>
                    Price:
                    <span>
                      {engProducts.price} $
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
      </div> */}


    </>
  )
}

export default EngProducts;