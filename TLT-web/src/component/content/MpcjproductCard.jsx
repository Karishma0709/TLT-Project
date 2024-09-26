import React, { useState } from "react";
import Headings from "../utiliti/heading/Heading";
import styless from "./MpcjproductCard.module.css";
import productCards from '../../component/data/productCards';
import TPMForm from "./TPMForm";

const MpcjproductCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Set the selected product details
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProduct(null); // Clear the selected product when modal closes
  };

  return (
    <>
      <div className="flex flex-col justify-items-center items-center p-5 md:p-20 ">
        <div className="flex flex-col justify-items-start self-start md:ms-16">
          <Headings heading={"h2"} style={"text-shadow"}>
            <span className="text-primary">MPCJ</span> and <span className="text-primary">CGCJ</span> 2024 (Mains)
          </Headings>
          <Headings heading={"h3"}>Exclusive Practice Material</Headings>
          <Headings heading={"h5"}>Starting From 2nd February 2024</Headings>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {productCards.map((product) => (
            <div className={styless.card_style} onClick={() => handleCardClick(product)} key={product.id}>
              <div className={styless.content}>
                <div className={styless.icons_div}>
                  <img src={product.img} className={styless.icons} />
                </div>
                <div className={styless.title}>{product.title}</div>
                <div className={styless.price}>{product.price}</div>
                <div className={styless.description}>{product.description}</div>
                <div className={styless.buy}>{product.buy}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-3 rounded-lg max-w-full w-full bg-opacity-75">
            <button className="absolute text-3xl font-bold z-50 m-7 sm:right-16 sm:top-8 right-4 top-3 text-black" onClick={handleCloseModal}>X</button>
            <TPMForm selectedProduct={selectedProduct} /> {/* Pass the selected product to the form */}
          </div>
        </div>
      )}
    </>
  );
};

export default MpcjproductCard;
