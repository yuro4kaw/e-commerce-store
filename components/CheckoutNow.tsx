"use client";
import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/santity";
import { ProductCart } from "./AddToBag";

const CheckoutNow = ({
  currency,
  description,
  name,
  image,
  price,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return <Button variant={"secondary"} onClick={() => buyNow(product.price_id)}>Checkout now</Button>;
};

export default CheckoutNow;
