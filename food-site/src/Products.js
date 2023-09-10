import React from "react";
import { useState, useEffect } from "react";
import "./Products.css";
import Contact from "./Contact";

function Products() {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);

  //Fetching breakfast items
  useEffect(() => {
    fetch("http://localhost:4000/api/breakfast")
      .then((response) => response.json())
      .then((data) => setBreakfast(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //Fetching lunch items
  useEffect(() => {
    fetch("http://localhost:4000/api/lunch")
      .then((response) => response.json())
      .then((data) => setLunch(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //For the 'Add' button on products
  const [activeButton, setActiveButton] = useState(null);
  const [showMessage, setShowMessage] = useState(" ");
  const [selectedItem, setSelectedItem] = useState([]);
  const [showOrderMessage, setShowOrderMessage] = useState(" ");

  const handleClick = (index, type) => {
    setActiveButton(index);
    setShowMessage("Added!");
    console.log(index);
    // Set a timeout to hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    if(type==1){
    setSelectedItem([...selectedItem, lunch[index]]);
    }
    else{
      setSelectedItem([...selectedItem, breakfast[index]]); 
    }
  };

  const handleOrder = () => {
    setShowOrderMessage("Your order has been recorded and is on its way!");
  };

  return (
    <>
      <div className="products-side">
        <hr />
        <h1 className="products-heading" id="breakfast-products">
          Breakfast Corner
        </h1>
        <hr />
        <div className="gallery">
          {breakfast.map((item, index) => (
            <div className="products">
              <img src={item.src}></img>
              <div className="textDiv">
                <h1 key={index}>{item.name}</h1>
                <p>{item.description}</p>
              </div>
              <p className="price">{item.price}</p>
              <button
                type="button"
                className="btn btn-warning btn-lg"
                onClick={() => handleClick(index, 0)}
              >
                ADD
              </button>
              <h3 className="Added">
                {activeButton === index ? showMessage : " "}&nbsp;
              </h3>
            </div>
          ))}
        </div>
        <hr />

        <h1 className="products-heading" id="lunch-products">
          Lunch Corner
        </h1>
        <hr />
        <div className="gallery">
          {lunch.map((item, index) => (
            <div className="products">
              <img src={item.src}></img>
              <div className="textDiv">
                <h1 key={index}>{item.name}</h1>
                <p>{item.description}</p>
              </div>
              <p className="price">{item.price}</p>
              <button
                type="button"
                className="btn btn-warning btn-lg"
                onClick={() => handleClick(index, 1)}
              >
                ADD
              </button>
              <h3 className="Added">
                {activeButton === index ? showMessage : " "}&nbsp;
              </h3>
            </div>
          ))}
        </div>

        <hr />
        <div className="products-heading">
          <h1 id="Checkout-Side">Checkout</h1>

          {selectedItem.length < 1 ? (
            <h4>You havent selected any items yet! </h4>
          ) : (
            <h4>Your selected items are: </h4>
          )}
          {selectedItem.map((item, index) => (
            <h4 key={index}>
              {item.name} <span className="price">{item.price}</span>
            </h4>
          ))}
        </div>
        {selectedItem.length < 1 ? null : (
          <button
            type="button"
            className="btn btn-warning btn-lg mx-auto d-block OrderButton"
            onClick={handleOrder}
          >
            ORDER
          </button>
        )}

        {showOrderMessage ? (
          <h4 className="products-heading">{showOrderMessage}</h4>
        ) : null}
        <hr />
      </div>
      <Contact />
    </>
  );
}

export default Products;
