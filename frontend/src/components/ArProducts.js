// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Rating from '../components/Rating';
import { useFetch } from '../hooks/useFetch';


import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';


const ArProducts = () => {

  const arProducts = useFetch('http://localhost:4000/arProducts');

      
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesPerView(1.45); 
      } else if (window.innerWidth <= 768) {
        setSlidesPerView(2); // Mobile screen
      } else if (window.innerWidth <= 1200) {
        setSlidesPerView(3.5); // Lower width
      } else {
        setSlidesPerView(5); // Default
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <>
      <h2 className="text-center mt-5">Arabic Books</h2>
      <Swiper className="arSlider container slidding"
        // install Swiper modules
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        modules={[EffectCoverflow, Navigation,Autoplay]}
      >
        {arProducts.map((arProducts) =>
          <SwiperSlide key={arProducts.id} id='swiper-slide'>
            <div className="box">
              <div className="box-img">
                <a href={"/info/" + (arProducts.id)} draggable="false">
                  <img
                    src={arProducts.image}
                    alt={arProducts.name}
                    draggable="false"
                  />
                </a>
              </div>
              <div className="img-content">
                <a href={"/info/" + (arProducts.id)} draggable="false">
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
        <div className="slider-controller">
          <div className="swiper-prev-btn">
            <ion-icon name="arrow-back-outline" ></ion-icon>
          </div>
          <div className="swiper-next-btn">
            <ion-icon name="arrow-forward-outline" ></ion-icon>
          </div>
        </div>

      </Swiper>




      {/* <div className="arBtns-container">
        <ul className="arSlider container slidding">
          {arProducts.map((arProducts) =>
            <li key={arProducts.id}>
              <div className="box">
                <div className="box-img">
                  <a href={"/info/" + (arProducts.id)} draggable="false">
                    <img
                      src={arProducts.image}
                      alt={arProducts.name}
                      draggable="false"
                    />
                  </a>
                </div>
                <div className="img-content">
                  <a href={"/info/" + (arProducts.id)} draggable="false">
                    <h5>
                      {arProducts.name}
                    </h5>
                  </a>
                  <div className="book-rating">
                    <span>
                    {Rating({ value: arProducts.rating })}
                    </span>
                    <span>
                      {arProducts.numReview + " reviews"}
                    </span>
                  </div>
                  <p>
                    Price:
                    <span>
                      {arProducts.price} $
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

export default ArProducts;