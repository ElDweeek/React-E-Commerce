
import React from "react";

import { createOrder } from "../api";
import CheckoutSteps from "../components/CheckoutSteps";
import { cleanCart, getCartItems, getPayment, getShipping } from "../localStorage"
import { hideLoading, showLoading, showMessage } from "../utils";



const convertCartToOrder = () => {
  const orderItems = getCartItems();
  if (orderItems.length === 0) {
    document.location.hash = '/cart';
  }
  const shipping = getShipping();
  if (!shipping.address) {
    document.location.hash = '/shipping';
  }
  const payment = getPayment();
  if (!payment.paymentMethod) {
    document.location.hash = '/payment';
  }
  const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0)
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  return {
    orderItems,
    shipping,
    payment,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice
  }
};


const PlaceOrderScreen = () => {
  // render: () => {
  const {
    orderItems,
    shipping,
    payment,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice
  } = convertCartToOrder();


  return (
    <>
      <div className="placeOrder-screen">
        <div className="container">
          {CheckoutSteps.render({ step1: true, step2: true, step3: true, step4: true })}
          <div className="order">
            <div className="order-info">

              <div className="section">
                <h2>Shipping</h2>
                <div>
                  {shipping.address}, {shipping.city},
                  {shipping.postalCode}, {shipping.country}
                </div>
              </div>
              <div className="section">
                <h2>Payment</h2>
                <div>
                  Payment Method : {payment.paymentMethod}
                </div>
              </div>
              <div className="section">
                <ul className="cart-list-container">
                  <li>
                    <h2>Shopping Cart</h2>
                    <div>Price</div>
                  </li>
                  <hr />

                  {orderItems.map(item =>
                      <li className="details-holder">
                        <div className="img-specs-holder">
                          <div className="cart-image">
                            <img src="${item.image}" alt="${item.name}" />
                          </div>
                          <div className="cart-name">
                            <div>
                              <a href="/#/product/${item.product}">${item.name}</a>
                            </div>
                            <div>
                              Qty: ${item.qty}
                            </div>
                          </div>
                        </div>
                        <div className="cart-price">
                          $${item.price}
                        </div>
                        <hr />
                      </li>
                    )
                  }
                </ul>
              </div>

            </div>

            <div className="order-action">
              <ul>
                <li>
                  <h2>Order Summary</h2>
                </li>
                <li>
                  <div>Items</div><div>${itemsPrice}</div>
                </li>
                <li>
                  <div>Shipping</div><div>${shippingPrice}</div>
                </li>
                <li>
                  <div>Tax</div><div>${taxPrice}</div>
                </li>
                <li className="order-total">
                  <div>Order Total</div><div>${totalPrice}</div>
                </li>
                <li>
                  <button id="place-order-btn" className="placeOrder-btn btn">
                    Place Order
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </>
  )


}




// after_render: () => {
//   document.getElementById('place-order-btn')
//   .addEventListener('click', async() => {
//     const order = convertCartToOrder();
//     showLoading();
//     const data = await createOrder(order)
//     hideLoading();
//     if (data.error) {
//       showMessage(data.error);
//     } else {
//       cleanCart();
//       document.location.hash = `/order/${data.order._id}`;
//     }
//   })

// }



export default PlaceOrderScreen;