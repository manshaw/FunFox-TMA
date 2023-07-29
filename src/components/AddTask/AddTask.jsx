import "./AddTask.scss";

const AddTask = () => {
  return (
    <div className="add-task">
      <div className="container">
        <div>
          You have been added to this group by admin. Now you can add new tasks here. To do so, simply click on add task button, fill form details and then submit. You can see all tasks here of your fellow friends who are already member of this group. To delete a task simple click on delete icon and click confirm to delete. You can change status of your task anytime.</div>
        <button>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;