import AddTask from "../../components/AddTask/AddTask";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-page">
        <Header></Header>
        <AddTask></AddTask>
        <List></List>
      </div>
    </>
  );
};

export default Dashboard;
