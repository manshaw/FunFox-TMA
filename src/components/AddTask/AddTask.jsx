import { useRef, useState } from "react";
import "./AddTask.scss";

const AddTask = () => {
  const modal = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
    modal.current.style.display = "none";
  };

  const openModal = () => {
    setIsOpen(!isOpen);
    modal.current.style.display = "flex";
  };
  return (
    <>
      <div className="modal-container" ref={modal}>
        <div className="modal">
        <div className="header">
            <div className="h-title">Add New Task</div>
            <div className="h-close" onClick={closeModal}>X</div>
        </div>
        <div className="mbody">
            <input type="text" placeholder="Enter Title" />
            <input className="mdesc" type="text" placeholder="Enter Description" />
            <button>Add</button>
        </div>
        </div>
      </div>
      <div className="add-task">
        <div className="container">
          <div>
            You have been added to this group by admin. Now you can add new
            tasks here. To do so, simply click on add task button, fill form
            details and then submit. You can see all tasks here of your fellow
            friends who are already member of this group. To delete a task
            simple click on delete icon and click confirm to delete. You can
            change status of your task anytime.
          </div>
          <button onClick={openModal}>Add Task</button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
