import React from "react";
import styles from "./Header.module.css";
import { useParams } from "react-router-dom";
import { ReactComponent as Bell } from "../header/icon/bell.svg";
import { ReactComponent as Back } from "../header/icon/back.svg";

const Header = (props) => {
  let { tableNum } = useParams();
  let content;
  switch (props.viewHeader) {
    case "order":
      content = (
        <div className={styles.orderheader}>
          <h2>Mornin'Gun</h2>
          <div className={styles.table}>
            <p>{tableNum}번 테이블</p>
          </div>
        </div>
      );
      break;
    case "push-order":
      content = (
        <div className={styles["shadow-header"]}>
          <div className={styles["back"]}>
            <Back />
          </div>
          <h2>장바구니</h2>
        </div>
      );
      break;
    case "management-menu":
      content = (
        <div className={styles["shadow-header"]}>
          <div className={styles["back"]}>
            <Back />
          </div>
          <h2>Mornin'Gun</h2>
        </div>
      );
      break;
    case "create-menu":
      content = (
        <div className={styles["shadow-header"]}>
          <div className={styles["back"]}>
            <Back />
          </div>
          <h2>Mornin'Gun</h2>
        </div>
      );
      break;
    case "recipe-order":
      content = (
        <div className={styles.billheader}>
          <div className={styles["back"]}>
            <Back />
          </div>
          <h2>주문내역</h2>
        </div>
      );
      break;
    case "menu-detail":
      content = (
        <div className={styles["menu-detail"]}>
          <Bell />
        </div>
      );
      break;

    default:
      content = <div className={styles.header}></div>;
      break;
  }

  return <div>{content}</div>;
};

export default Header;
