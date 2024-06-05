import React from "react";
import styles from "./PosPage.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as BackgroundSVG } from "./util/WoodBackground.svg";
import { ReactComponent as Close } from "./util/Close.svg";
import { ReactComponent as ButtonList } from "./util/ButtonList.svg";
import { ReactComponent as Home } from "./util/Home.svg";

const PosPage = () => {
  const Num = 6;
  const { id } = useParams();
  const positions = [
    { x: -200, y: 0 },
    { x: 200, y: 50 },
    { x: -200, y: 150 },
    { x: 200, y: 200 },
    { x: -200, y: 300 },
    { x: 200, y: 330 },
  ];

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더함
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const todayDate = getTodayDate(); // 오늘 날짜 가져오기

  return (
    <div className={styles["content"]}>
      <div className={styles["pos-content"]}>
        <div className={styles["pos-header"]}>
          <h1>POS</h1>
          <div className={styles["pos-header-textbox"]}>
            <ul style={{ flexDirection: "column", marginRight: "120px" }}>
              <li>매장명 : 모닝건</li>
              <li>영업일자 : {todayDate}</li>
            </ul>
            <ul>
              <li>포스번호 : {id}</li>
            </ul>
          </div>

          <Close />
        </div>
        <div className={styles["pos-box"]}>
          <BackgroundSVG className={styles["pos-background"]}></BackgroundSVG>
          <div className={styles.buttonList}>
            <ButtonList />
          </div>
          <div className={styles.homeButton}>
            <Home />
          </div>
          <div className={styles["tableBox-container"]}>
            {Array.from({ length: Num }).map((_, index) => (
              <div
                key={index}
                className={styles.tableBox}
                style={{
                  transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
                }}
              >
                <p>{index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosPage;
