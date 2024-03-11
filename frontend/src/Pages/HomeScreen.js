import arProductsApi from '../api/arProducts';
import authorsApi from '../api/authors';
import engProductsApi from '../api/engProducts';
import Rating from '../components/Rating';


const HomeScreen = async () => {

const authors = authorsApi();
const engProducts = engProductsApi();
const arProducts = arProductsApi();
  return (
    <>
      <main>
        <div className="landing d-flex justify-content-center align-items-center">
          <div className="container text-center">
            <h3 className="text-uppercase pb-3 mb-5">
              Reading is a <span>pleasure</span>, reading is a <span>challenge</span>
            </h3>
            <p>
              Reading helps you explore life from different perspectives. While you
              read books you are building new and creative thoughts, images and
              opinions in your mind. It makes you think creatively, fantasize and use
              your imagination.
            </p>
            <div className="btn mt-4 ps-5 pe-5 pt-3 pb-3">Start Reading</div>
          </div>
        </div>
        <div className="authors">
          <div className="container">
            <div className="heading text-center">
              <h1>Authors</h1>
            </div>
            <ul id="slider" className="authors slider container">
              {authors.map((authors) =>
                <li className={"section"+(authors.class)+"row"}>
                  <span>
                    {authors.title}
                  </span>
                  <div className="slide col-lg-4 col-md-6">
                    <img src={authors.image1} alt="" draggable="false" />
                    <div className="text">
                      <h5>
                        {authors.name1}
                      </h5>
                      <p>
                        {authors.snapshot1}
                      </p>
                    </div>
                  </div>
                  <div className="slide col-lg-4 col-md-6">
                    <img src={authors.image2} alt="" draggable="false" />
                    <div className="text">
                      <h5>
                        {authors.name2}
                      </h5>
                      <p>
                        {authors.snapshot2}
                      </p>
                    </div>
                  </div>
                  <div className="slide col-lg-4 col-md-6">
                    <img src={authors.image3} alt="" draggable="false" />
                    <div className="text">
                      <h5>
                        {authors.name3}
                      </h5>
                      <p>
                        {authors.snapshot3}
                      </p>
                    </div>
                  </div>
                </li>
              )}
            </ul>
            <div className="control container">
              <span id="prev" className="prev">
                <i className="fa-solid fa-chevron-left" />
              </span>
              <span id="next" className="next">
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
          </div>
          <div
            id="indicators"
            className="indicators container d-none d-lg-block"
          ></div>
        </div>
        <div className="video">
          <video
            autoPlay=""
            muted=""
            loop=""
            src="./imgs/aboutUs.mp4"
            type="video/mp4"
          />
          <div className="text  text-center">
            <h3>Reading Benefits</h3>
            <p>
              "Writing and reading decrease our sense of isolation. They deepen and
              widen and expand our sense of life: They feed the soul. When writers
              make us shake our heads with the exactness of their prose and their
              truths, and even make us laugh about ourselves or life, our buoyancy is
              restored. We are given a shot at dancing with, or at least clapping
              along with, the absurdity of life, instead of being squashed by it over
              and over again. It's like singing on a boat during a terrible storm at
              sea. You can't stop the raging storm, but singing can change the hearts
              and spirits of the people who are together on that ship."
            </p>
            <div className="btn mt-4 ps-5 pe-5 pt-3 pb-3">See More</div>
          </div>
        </div>
        <div className="books">
          <div className="container">
            <div className="heading text-center">
              <h1>Books</h1>
            </div>
            <h2 className="text-center">English Books</h2>
            <div className="engBtns-container">
              <ul className="engSlider container slidding">
                {engProducts.map((engProducts) =>
                  <li>
                    <div className="box">
                      <div className="box-img">
                        <a href={"/#/info/"+(engProducts._id)} draggable="false">
                          <img
                            src="{engProducts.image}"
                            alt="{engProducts.name}"
                            draggable="false"
                          />
                        </a>
                      </div>
                      <div className="box-content">
                        <a href={"/#/info/"+(engProducts._id)} draggable="false">
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
                <i className="fa fa-angle-left" aria-hidden="true" />
              </span>
              <span className="books-btn" id="engRight">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </div>
            <h2 className="text-center mt-5">Arabic Books</h2>
            <div className="arBtns-container">
              <ul className="arSlider container slidding">
                {arProducts.map((arProducts) =>
                  <li>
                    <div className="box">
                      <div className="box-img">
                        <a href={"/#/info/"+(arProducts._id)} draggable="false">
                          <img
                            src={arProducts.image}
                            alt={arProducts.name}
                            draggable="false"
                          />
                        </a>
                      </div>
                      <div className="img-content">
                        <a href={"/#/info/"+(arProducts._id)} draggable="false">
                          <h5>
                            {arProducts.name}
                          </h5>
                        </a>
                        <div className="book-rating">
                          <span>
                            {Rating.render({ value: arProducts.rating })
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
              </ul>
              <span className="books-btn" id="arLeft">
                <i className="fa fa-angle-left" aria-hidden="true" />
              </span>
              <span className="books-btn" id="arRight">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </main>

    </>



  )

}


export default HomeScreen;