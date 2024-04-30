import { getOrder } from "../api";
import { parseRequestUrl } from "../utils";



const OrderScreen = {
  render: async () => {
    const request = parseRequestUrl();
    const {
      _id,
      shipping,
      payment,
      orderItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      isDelivered,
      deliveredAt,
      isPaid,
      paidAt,
    } = await getOrder(request.id)

    return (
      <div className="placeOrder-screen">
        <h3 className="ms-5">Order : {_id}</h3>
        <div className="container">
          <div className="order">
            <div className="order-info">

              <div className="section">
                <h2>Shipping</h2>
                <div>
                  {shipping.address}, {shipping.city},
                  {shipping.postalCode}, {shipping.country}
                </div>
                {isDelivered ?
                  <div className="text-success">Delivered at {deliveredAt}</div>
                  : <div className="text-danger">Not Delivered</div>
                }
              </div>
              <div className="section">
                <h2>Payment</h2>
                <div>
                  Payment Method : {payment?.paymentMethod ?? ''}
                </div>
                {isPaid ?
                  <div className="text-success">Paid at {paidAt}</div>
                  : <div className="text-danger">Not Paid</div>
                }
              </div>
              <div className="section">
                <ul className="cart-list-container">
                  <li>
                    <h2>Shopping Cart</h2>
                    <div>Price</div>
                  </li>
                  <hr />

                  {orderItems.map((item) =>

                    <li className="details-holder" key={item.id}>
                      <div className="img-specs-holder">
                        <div className="cart-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-name">
                          <div>
                            <a href={"/product/"+item.product}>{item.name}</a>
                          </div>
                          <div>
                            Qty: {item.qty}
                          </div>
                        </div>
                      </div>
                      <div className="cart-price">
                        ${item.price}
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
              </ul>
            </div>

          </div>

        </div>
      </div>
    )
  }






}

export default OrderScreen;