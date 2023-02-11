import React, { useState } from "react";
// COMPONENTS IMPORTS
import ProgressBar from "../progressbar/ProgressBar";
import Checkmark from "../checkmark/Checkmark";
import Modal from "../modal/Modal";

const ListItem = ({ task }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <li className="list-item">
      <div className="info-container">
        <Checkmark />
        <h4 className="task-title">{task.title}</h4>
        <ProgressBar />
      </div>
      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
        </button>
        <button className="delete">DELETE</button>
      </div>
      {showModal && (
        <Modal mode={"edit"} setShowModal={setShowModal} task={task} />
      )}
    </li>
  );
};

export default ListItem;
