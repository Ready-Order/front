import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDotsWave } from "../../menu/util/ReactLoading";
import Divider from "../../../shared/Divider/Divider";
import { useParams } from "react-router-dom";

import styles from "../../order/pages/CartPage.module.css";

const BillRoot = ({ handleTotal }) => {
  const { tableNum } = useParams();
  const [bills, setBills] = useState(null);

  useEffect(() => {
    const handleGetBill = async () => {
      try {
        const response = await axios.get(`/api/orders/${tableNum}/bill`);
        setBills(response.data);
        console.log("Bill Get Success");
      } catch (error) {
        console.error("Bill Get Error", error);
      }
    };

    if (tableNum) {
      handleGetBill();
    }
  }, [tableNum]);

  useEffect(() => {
    if (bills) {
      handleTotal(bills.total);
    }
  }, [bills, handleTotal]);

  if (!bills) {
    return <ThreeDotsWave />;
  }

  return (
    <div>
      {bills.detail.map((item, index) => (
        <div key={index} className={styles["item-content"]}>
          <div className={styles["cart-item"]}>
            <img
              src={item[4]}
              alt={item[0]}
              className={styles["cart-item-img"]}
            />
            <div className={styles["cart-item-text"]}>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
            <div className={styles["item-button"]}>
              <div className={styles["item-button-num"]}>
                <p>{item[2]}</p>
              </div>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default BillRoot;
