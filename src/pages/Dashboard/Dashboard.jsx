import { useContext, useEffect, useState } from "react";
import AddTask from "../../components/AddTask/AddTask";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import "./Dashboard.scss";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(
        "http://localhost:3000/task/user/" + userContext.user.userId
      );
      setTasks(response.data.data);
    };
    fetchTasks();
  }, [tasks, userContext]);
  return (
    <>
      <div className="dashboard-page">
        <Header
          title={userContext.user.group}
          pictureUrl={userContext.user.pictureUrl}
        ></Header>
        <AddTask></AddTask>
        <List tasks={tasks}></List>
      </div>
    </>
  );
};

export default Dashboard;
