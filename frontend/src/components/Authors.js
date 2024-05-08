import { useFetch } from '../hooks/useFetch';
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import '../Css/authors.css'

const Authors = () => {
  const authors = useFetch('http://localhost:4000/authors');
  
  return (

    <>
      <div className="authors">
        <Container>
          <div className="heading text-center">
            <h1>Authors</h1>
          </div>
          <Carousel id="slider" className="authors slider container">
            {authors.map((author) => (
              <Carousel.Item  key={author.id}>
                <span className={`section ${author.class} row`} id='title-heading'>{author.title}</span>
                <Row>
                  <Col lg={4} md={6}>
                    <img src={author.image1} alt="" draggable="false"/>
                    <div className="text">
                      <h5>{author.name1}</h5>
                      <p>{author.snapshot1.slice(0,200)}</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <img src={author.image2} alt="" draggable="false"/>
                    <div className="text">
                      <h5>{author.name2}</h5>
                      <p>{author.snapshot2.slice(0,200)}</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <img src={author.image3} alt="" draggable="false"/>
                    <div className="text">
                      <h5>{author.name3}</h5>
                      <p>{author.snapshot3.slice(0,200)}</p>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
          
        </Container>
      </div>




      {/* <div className="authors">
          <div className="container">
            <div className="heading text-center">
              <h1>Authors</h1>
            </div>
            <ul id="slider" className="authors slider container">
              {authors.map((authors) =>
                <li className={"section" + (authors.class) + "row"} key={authors.id}>
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
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
              <span id="next" className="next">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </div>
          <div
            id="indicators"
            className="indicators container d-none d-lg-block"
          ></div>
        </div> */}

    </>
  )
}

export default Authors;