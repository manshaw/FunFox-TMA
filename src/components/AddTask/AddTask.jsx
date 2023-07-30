import { useEffect, useRef, useState } from "react";
import "./AddTask.scss";
import Swal from "sweetalert2";
import axios from "axios";

const AddTask = () => {
  const modal = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  const assigneeId = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  const getDate = () => {
    var date = new Date();
    var year = date.toISOString().split("-")[0];
    var month = date.toISOString().split("-")[1];
    var day = date.getDate().toString();
    return day + "-" + month + "-" + year;
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
    modal.current.style.display = "none";
  };

  const openModal = () => {
    setIsOpen(!isOpen);
    modal.current.style.display = "flex";
  };

  const showLoading = () => {
    Swal.fire({
      title: "loading ...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };

  const showError = () => {
    Swal.fire("Error", "Fill all fields", "error");
  };

  const FetchUsers = () => {
    showLoading();

    axios
      .request("http://localhost:3000/user/all")
      .then((response) => {
        Swal.close();
        console.log("USER ALL ====>>>", response.data.data);
        setAllUsers(response.data.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

  const PostTask = () => {
    showLoading();
    let data = JSON.stringify({
      assigneeId: assigneeId.current.value,
      assignee:
        assigneeId.current.options[assigneeId.current.selectedIndex].text,
      title: title.current.value,
      description: description.current.value,
      status: "Pending",
      dated: getDate(),
    });

    let config = {
      method: "post",
      url: "http://localhost:3000/task/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        Swal.close();
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

  const handleSubmit = () => {
    validation() ? PostTask() : showError();
  };

  const validation = () => {
    return title.current.value !== "" &&
      description.current.value !== "" &&
      assigneeId.current.value !== ""
      ? true
      : false;
  };

  useEffect(() => {
    FetchUsers();
  }, []);
  return (
    <>
      <div className="modal-container" ref={modal}>
        <div className="modal">
          <div className="header">
            <div className="h-title">Add New Task</div>
            <div className="h-close" onClick={closeModal}>
              X
            </div>
          </div>
          <div className="mbody">
            <select ref={assigneeId}>
              <option value="">Select Assignee</option>
              {allUsers.map((singleUser, index) => (
                <option key={index} value={singleUser.userId}>
                  {singleUser.name}
                </option>
              ))}
            </select>
            <input ref={title} type="text" placeholder="Enter Title" />
            <input
              ref={description}
              className="mdesc"
              type="text"
              placeholder="Enter Description"
            />
            <button onClick={handleSubmit}>Add</button>
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
