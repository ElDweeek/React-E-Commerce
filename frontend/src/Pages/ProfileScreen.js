
import React from "react";

import { getMyOrders, personalUpdate } from "../api";
import { getUserInfo, setUserInfo } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const ProfileScreen = async () => {
  // render: async () => {
  const { fName, lName, email, date, phoneNumber } = getUserInfo();
  if (!fName) {
    document.location.hash = '/';
  }
  const orders = await getMyOrders()
  return (

    <>
      <div className="profile-screen">
        <div className="container">
          <ul className="heading">
            <li><a href="/">Homepage</a></li>
            <span>/</span>
            <li>My Account</li>
          </ul>
          <h1>My Account</h1>
          <div className="section row">
            <aside className="section-links col-md-4">
              <ul>
                <li className="active" id="myDetails-link">
                  <span>
                    <i className="fa-regular fa-address-card"></i>
                  </span>
                  My details
                </li>
                <li id="myAddress-link">
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  My adress book
                </li>
                <li id="myOrders-link">
                  <span>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </span>
                  My orders
                </li>
                <li id="accountSettings-link">
                  <span>
                    <i className="fa-solid fa-gear"></i>
                  </span>
                  Acount settings
                </li>
              </ul>
            </aside>


            <div className="section-details col-md-8">

              <div className="view-list">
                <div className="content-box active" id="my-details">
                  <form id="presonal-form" className="presonal-form">
                    <h1>My Details</h1>
                    <h3>Personal Infromation</h3>
                    <hr />
                    <div className="flex-container">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officia id esse? Ratione aliquam quas eveniet.</p>
                      <ul className="form-items">
                        <li>
                          <input type="text" name="name" id="fName" placeholder="First Name" autocomplete="off" value={fName} />
                          <input type="text" name="name" id="lName" placeholder="Last Name" autocomplete="off" value={lName} />
                        </li>
                        <li>
                          <input type="date" name="date" id="date" value={date} />
                        </li>
                        <li>
                          <input type="tel" id="phone" name="phone" placeholder="8888-888-8888" autocomplete="off" maxlength="13" title="Ten digits required" value={phoneNumber} />
                        </li>
                        <li>
                          <button type="submit" className="sub-btn">Save</button>
                        </li>
                      </ul>
                    </div>
                  </form>

                  <form id="email-form" className="email-form">
                    <h3>E-mail adress</h3>
                    <hr />
                    <div className="flex-container">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda officia id esse? Ratione aliquam quas eveniet.</p>
                      <ul className="form-items">
                        <li id="email-li">
                          <input type="email" name="email" id="email" placeholder="email@example.com" autocomplete="off" value={email} />
                        </li>
                        <li>
                          <button type="submit" className="sub-btn">Save</button>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>


                <div className="content-box" id="my-address-book">
                  <form id="myAddress-form" className="myAddress-form">
                    <h1>My Address Book</h1>
                    <ul className="form-items">

                    </ul>
                  </form>
                </div>
                <div className="content-box" id="my-orders">
                  <h1>Order History</h1>
                  <table>

                    <thead>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Delivered</th>
                      <th>Actions</th>
                    </thead>

                    <tbody>
                      ${orders.length === 0 ? `<tr><td colspan="6">No Order Found</tr>` : orders.map(order => `
                  <tr>
                  <td>${order._id}</td>
                  <td>${order.createdAt}</td>
                  <td>${order.totalPrice}</td>
                  <td>${order.PaidAt || 'Not yet'}</td>
                  <td>${order.DeliveredAt || 'Not yet'}</td>
                  <td><a href="/#/order/${order._id}">Details</a></td>
                  </tr>
                  `).join('\n')}
                    </tbody>

                  </table>
                </div>
                <div className="content-box" id="account-settings">
                  <form id="accSettings-form" className="accSettings-form">
                    <h1>Account Settings</h1>
                    <ul className="form-items">
                      <li>
                        <input type="password" name="old-password" id="old-password" placeholder="Enter your old Password" />
                      </li>
                      <li>
                        <input type="password" name="new-password" id="new-password" placeholder="Create New Password" />
                      </li>
                      <li>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm New Password" />
                      </li>
                    </ul>
                  </form>
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>
    </>



  )
}
//   after_render: () => {

//     const myDetailsLink = document.getElementById('myDetails-link');
//     const myDetailsContent = document.getElementById('my-details');
//     const myAddressLink = document.getElementById('myAddress-link');
//     const myAddressContent = document.getElementById('my-address-book');
//     const myOdersLink = document.getElementById('myOrders-link');
//     const myOrdersContent = document.getElementById('my-orders');
//     const accountSettingsLink = document.getElementById('accountSettings-link');
//     const accountSettingsContent = document.getElementById('account-settings');

//     const removeAllActive = ()=> {
//       myDetailsLink.classList.remove('active'),
//       myDetailsContent.classList.remove('active'),
//       myAddressLink.classList.remove('active'),
//       myAddressContent.classList.remove('active'),
//       myOdersLink.classList.remove('active'),
//       myOrdersContent.classList.remove('active'),
//       accountSettingsLink.classList.remove('active'),
//       accountSettingsContent.classList.remove('active')
//     }

//     document.addEventListener('click', (e)=>{
//     if(e.target === myDetailsLink) {
//       removeAllActive()
//       myDetailsLink.classList.add('active'),
//       myDetailsContent.classList.add('active')


//     } else if (e.target === myAddressLink) {
//       removeAllActive()
//       myAddressLink.classList.add('active'),
//       myAddressContent.classList.add('active')
//     }
//     else if (e.target === myOdersLink) {
//       removeAllActive()
//       myOdersLink.classList.add('active'),
//       myOrdersContent.classList.add('active')
//     }
//     else if (e.target === accountSettingsLink) {
//       removeAllActive()
//       accountSettingsLink.classList.add('active'),
//       accountSettingsContent.classList.add('active')
//     }
//   })



//   function phoneSpaces(e) {
//     // Remove any existing spaces
//     e.value = e.value.replace(/\s/g, '');

//     // Add spaces in the desired format
//     if (e.value.length >= 4) {
//         e.value = e.value.replace(/(\d{4})(\d{0,3})/, "$1 $2");
//     }
//     if (e.value.length >= 7) {
//         e.value = e.value.replace(/(\d{4}) (\d{3})(\d{0,4})/, "$1 $2 $3");
//     }
// }
// // Add event listener to call phoneSpaces on input change
// document.getElementById('phone').addEventListener('input', function() {
//     phoneSpaces(this);
// });




//     document
//       .getElementById("presonal-form")
//       .addEventListener("submit", async (e) => {
//         e.preventDefault();
//         showLoading();
//         const data = await personalUpdate({
//           fName: document.getElementById("fName").value,
//           lName: document.getElementById("lName").value,
//           date: document.getElementById("date").value,
//           phoneNumber: document.getElementById("phone").value,
//           email: document.getElementById("email").value,
//         });
//         hideLoading();
//         if (data.error) {
//           showMessage(data.error);
//         } else {
//           setUserInfo(data);
//           document.location.hash = "/";
//         }
//       });
//   },
// };

export default ProfileScreen;
