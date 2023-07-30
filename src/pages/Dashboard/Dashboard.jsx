import { useEffect, useState } from "react";
import AddTask from "../../components/AddTask/AddTask";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import "./Dashboard.scss";
import axios from "axios";
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/task/user/" + 1234);
    setTasks(response.data.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <div className="dashboard-page">
        <Header title={"Fullstack Development Group"}></Header>
        <AddTask></AddTask>
        <List tasks={tasks}></List>
      </div>
    </>
  );
};

export default Dashboard;
