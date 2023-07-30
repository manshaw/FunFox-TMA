import { useEffect } from "react";
import Task from "../Task/Task";
import "./List.scss";
import PropTypes from "prop-types";

const List = ({ tasks }) => {
  useEffect(() => {}, [tasks]);
  return (
    <div className="list">
      <div className="container">
        {tasks.map((task, index) => (
          <Task key={index} task={task}></Task>
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  tasks: PropTypes.array,
};

export default List;
