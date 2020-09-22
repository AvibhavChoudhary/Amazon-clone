import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/July/AMOLED/V214721272_IN_WLME_Avicii_LP_DesktopTallHero_1500x600_1PC._SX1343_CB409145170_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your shopping cart is Empty!</h2>
            <p>
              Please add some item to the cart to make a purchase successful
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Here is your cart</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <h2>SubTotal</h2>
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
