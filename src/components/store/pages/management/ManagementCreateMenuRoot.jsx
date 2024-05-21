import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Modal from "../../../../shared/modal/Modal";
import ManagementCreateMenuPage from "./ManagementCreateMenuPage";

const ManagementCreateMenuRoot = () => {
  let create_response = "";
  const location = useLocation();
  const { category } = location.state || {}; // 전달된 category 값 받기
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleCreate = async (body) => {
    console.log(body);

    try {
      await axios.post("/api/menus/", body, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      });
      console.log("create ok");
      create_response = "success";
    } catch (error) {
      console.log("Create Error", error);
      create_response = "fail";
      handleShow();
    }
  };
  return (
    <div>
      <Modal show={showModal} onClose={handleClose}>
        <div className="OrderModal">
          <p>등록 실패</p>
        </div>
      </Modal>
      <ManagementCreateMenuPage
        onSave={handleCreate}
        response={create_response}
        initialCategory={category}
      />
    </div>
  );
};

export default ManagementCreateMenuRoot;
