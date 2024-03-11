import '../Css/Ffooter.css'
import FootLogo from '../images/FootLogo.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footLogo col-lg-3 col-12 ">
            <img className="w-lg-100" src={FootLogo} alt="" />
            <p>
              We really belive that good book Store is not just about selling books,
              but reaching out into the world and making a difference.
            </p>
          </div>
          <div className="links  col-6 col-lg-3">
            <h3 className="ms-4 mt-3 mb-4">Important Links</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
            </ul>
          </div>
          <div className="links  col-6 col-lg-3">
            <h3 className="ms-4 mt-3 mb-4">Short Links</h3>
            <ul>
              <li>
                <a href="#">How To Buy</a>
              </li>
              <li>
                <a href="#">Track My Orders</a>
              </li>
              <li>
                <a href="#">Common Questions</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="get-in-touch col-lg-3 col-12">
            <h3 className="mt-3 mb-4">Get In Touch</h3>
            <div className="contact">
              <a href="#">
                <i className="fa-solid fa-envelope-open-text" /> email@yahoo.com
              </a>
            </div>
            <div className="contact">
              <a href="#">
                <i className="fa-brands fa-whatsapp" /> +0100-000-0000
              </a>
            </div>
            <div className="contact">
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="#">
                <i className="fa-brands fa-square-x-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="last-word">
        <div className="container d-flex justify-content-between align-items-center">
          <p>All Rights Reserved © 2024</p>
          <p>
            Created BY <span>"Mahmoud ElDweek"</span>
          </p>
        </div>
      </div>
    </div>

  )
}


export default Footer;