import Task from "./Task";
import {BiCommentDots, BiDotsVerticalRounded, BiFilter} from "react-icons/bi";
import AddTask from "./AddTask";
import {useEffect, useState} from "react";
import axios from "axios";

const TaskList = ({title = "Include"}) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then((d) => setTasks(d.data));
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-10 max-w-4xl mx-auto px-4 pb-3">
      <div className="flex justify-between">
        <div className="font-bold text-2xl mb-10 pt-1.5 max-[420px]:text-[1.5rem]">
          {title}
        </div>
        <div className="btn-group">
          <div className="btn btn-ghost normal-case gap-3">
            <BiCommentDots className="h-6 w-6 max-[420px]:h-5 max-[420px]:w-5"/>
          </div>
          <div className="btn btn-ghost normal-case gap-3">
            <BiFilter className="h-6 w-6 max-[420px]:h-5 max-[420px]:w-5"/>
          </div>
          <div className="btn btn-ghost normal-case">
            <BiDotsVerticalRounded className="h-6 w-6 max-[420px]:h-5 max-[420px]:w-5"/>
          </div>
        </div>
      </div>
      {tasks.map((t) => (
        <Task id={t.id} key={t.id} taskTitle={t.taskTitle} isDone={t.isDone}/>
      ))}
      <AddTask/>
    </div>
  );
};

export default TaskList;
