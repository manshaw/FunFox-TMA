import "./Task.scss"
import PropTypes from "prop-types";

const Task = ({task}) => {
  return (
    <div className="task">
    <div className="container-task">
        <div className="t-id">{task.id}</div>
        <div className="t-assignee">{task.assignee}</div>
        <div className="t-title">{task.title}</div>
        <div className="t-description">{task.description}</div>
        <div className="t-status">{task.status}</div>
        <div className="t-dated">{task.dated}</div>
        <button className="t-delete">Delete</button>
    </div> 
    </div>
  )
}

Task.propTypes = {
    task: PropTypes.object,
  };

export default Task
