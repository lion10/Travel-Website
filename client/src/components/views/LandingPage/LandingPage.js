import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Axios from "axios";
import { response } from "express";

function LandingPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    Axios.post("/api/product/getProducts").then((response) => {
      if (response.data.success) {
        setProducts(response.data.products);
        console.log(response.data.products);
      } else {
        alert("Failed to fetch products data");
      }
    });
  }, []);

  return <></>;
}

export default LandingPage;
