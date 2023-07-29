import Task from "../Task/Task";
import "./List.scss";
import data from "../../dummy_data";

const List = () => {

  console.log(data);
  return (
    <div className="list">
      <div className="container">
        {
          data.map((task, index)=>(
            <Task key={index} task={task}></Task>
          ))
        }
      </div>
    </div>
  );
};

export default List;
