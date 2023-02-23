
import React from 'react';


import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "./api";

const PayButton = ({  }) => {
  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket);
  console.log(user.id)
  console.log(basket)
  // console.log(basket.lineItems)


  const line_items = basket.map((product) => {
    return {
      items: {
        name: product.name,
        size: product.selectedSizeNew,
        price: product.selectedPrice,
        extra_ingredients: product.toppings,

        // brand: product.brand,
        // availableColors: product.availableColors,
        // description: product.description,
        // id: product.id,
        // image: product.image,
        // imageCollection: product.imageCollection
      }
    };
  });

  console.log(line_items)

  
  const itemsID = basket.map((product) => {
    return {
      items: {
        id: product.id,
        // size: product.selectedSizeNew,
        // price: product.selectedPrice,
        // extra_ingredients: product.toppings,

        // brand: product.brand,
        // availableColors: product.availableColors,
        // description: product.description,
        // id: product.id,
        // image: product.image,
        // imageCollection: product.imageCollection
      }
    };
  });

  console.log(itemsID)




  const line_items1 = basket?.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.image,
          description: item.description,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  console.log(line_items1)




  const handleCheckout = () => {



    axios
      .post(`${url}/create-checkout-session`, {
        userId: user.id,
        basket: basket,
        line_items2: line_items,
        itemsID: itemsID,
        line_items1: line_items1
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
