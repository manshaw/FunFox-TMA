import { useEffect, useRef } from "react";
import "./Task.scss";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";
import BASE_URL from "../../constants";

const Task = ({ task }) => {
  const style = useRef(null);

  const showLoading = () => {
    Swal.fire({
      title: "loading ...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };

  const DeleteTask = () => {
    showLoading();

    let data = JSON.stringify({
      id: task.id,
    });

    let config = {
      method: "post",
      url: BASE_URL + "/task/delete",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then(() => {
        Swal.close();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

  const UpdateTask = () => {
    showLoading();
    let data = JSON.stringify({
      id: task.id,
      status: "Completed",
    });

    let config = {
      method: "post",
      url: BASE_URL + "/task/update",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then(() => {
        Swal.close();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteTask();
      }
    });
  };

  useEffect(() => {
    task.status === "Completed"
      ? (style.current.style.color = "green")
      : (style.current.style.color = "rgb(193, 51, 51)");
  }, [task]);

  return (
    <div className="task">
      <div className="container-task">
        <div className="t-id">{task.id}</div>
        <div className="t-assignee">{task.assignee}</div>
        <div className="t-title">{task.title}</div>
        <div className="t-description">{task.description}</div>
        <div className="t-status" ref={style}>
          {task.status}
        </div>
        {task.status === "Completed" ? (
          <></>
        ) : (
          <button className="t-mark" onClick={UpdateTask}>
            Submit
          </button>
        )}
        <div className="t-dated">{task.dated}</div>
        <button className="t-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
