"use client";

import { useEffect, useState } from "react";
import { CardList, TotalCardItems } from "./card";
import AddSnack from "./addSnack";
import Filter from "./filter";
import SearchSnack from "./searchSnack";
import Cart from "./cart";

export default function Home() {
  const [cardDetailsList, setCardDetailsList] = useState([]);
  const [filterConfig, setFilterConfig] = useState({ type: "", value: "All" });
  const [cartItems, setCartItems] = useState([]);

  async function getsnacksList() {
    await fetch("api/dashboard", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCardDetailsList(
          data.map((item) => {
            delete item._id;
            delete item.__v;
            return item;
          })
        );
        console.log(data);
      });
  }
  useEffect(() => {
    getsnacksList();
    console.log(cardDetailsList);
  }, []);

  return (
    <>
      <AddSnack
        cardDetailsList={cardDetailsList}
        setCardDetails={setCardDetailsList}
      />
      <Cart cartItems={cartItems} />
      <SearchSnack setFilterConfig={setFilterConfig} />
      <Filter data={cardDetailsList} setFilterConfig={setFilterConfig} />
      <CardList
        cardDetailsList={
          filterConfig.value !== "All"
            ? cardDetailsList.filter(
                (card) => card[filterConfig.type] === filterConfig.value
              )
            : cardDetailsList
        }
        setCartItems={setCartItems}
      />
      <TotalCardItems
        cardDetailsListLength={cardDetailsList.length}
      ></TotalCardItems>
    </>
  );
}
