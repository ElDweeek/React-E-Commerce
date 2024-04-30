import React from "react";


import CheckoutSteps from "../components/CheckoutSteps";
import { getShipping, getUserInfo, setShipping } from "../localStorage";

const ShippingScreen = () => {

  // render: () => {
    const { fName } = getUserInfo();
    if (!fName) {
      document.location.hash = '/';
    }
    const { address, city, postalCode, country } = getShipping();
    return (

      <>
        <div className="shippingScreen">
          ${CheckoutSteps.render({ step1: true, step2: true })}
          <div className="form-container">
            <div className="form-box">
              <form id="shipping-form" className="shipping-form">
                <ul className="form-items">
                  <li>
                    <h1>Shipping</h1>
                  </li>
                  <li>
                    <input type="text" name="address" id="address" placeholder="Address" value={address} autocomplete="off" />
                  </li>
                  <li>
                    <input type="text" name="city" id="city" placeholder="City" value={city} autocomplete="off" />
                  </li>
                  <li>
                    <input type="text" name="postalCode" id="postal-code" placeholder="Postal Code" value={postalCode} autocomplete="off" />
                  </li>
                  <li>
                    <input type="text" name="country" id="country" placeholder="Country" value={country} autocomplete="off" />
                  </li>
                  <li>
                    <button type="submit" className="sub-btn">
                      Continue
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </>

    )

  }
//   after_render: () => {
//     document.getElementById("shipping-form").addEventListener("submit", async (e) => {
//       e.preventDefault();
//       setShipping({
//         address: document.getElementById('address').value,
//         city: document.getElementById('city').value,
//         postalCode: document.getElementById('postal-code').value,
//         country: document.getElementById('country').value,
//       });
//       document.location.hash = '/payment'
//     });
//   }
// }


export default ShippingScreen;