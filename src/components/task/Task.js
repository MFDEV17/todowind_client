import { useState } from "react";
import { CgCalendarToday } from "react-icons/cg";
import { BiComment } from "react-icons/bi";
import {
  AiOutlineComment,
  AiOutlineEdit,
  AiOutlineFieldTime,
} from "react-icons/ai";
import TaskSettingsModal from "./TaskSettingsModal";

const Task = ({ isDone, taskTitle, id }) => {
  const [done, setDone] = useState(isDone);
  const [actions, setActions] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? <TaskSettingsModal id={id} taskTitle={taskTitle} isDone={isDone}/> : null}
      <div
        className="border-b-gray-600 border-b pb-2 flex justify-between items-center"
        onMouseEnter={() => setActions(true)}
        onMouseLeave={() => setActions(false)}
      >
        <div className="flex gap-3 items-center text-lg">
          <input
            type="checkbox"
            checked={isDone}
            className="checkbox"
            onClick={() => setDone(!done)}
          />
          <div className="flex flex-col gap-1">
            <p>{taskTitle}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CgCalendarToday color="rgb(74 222 128)" />
                <p className="text-sm text-green-400">Today</p>
              </div>
              <div className="flex items-center gap-2">
                <BiComment className="h-4 w-4" />
                <p className="text-sm">1</p>
              </div>
            </div>
          </div>
        </div>
        {actions ? (
          <div className={`flex items-center pt-4 duration-300 `}>
            <label
              onClick={async () => await setModal(true)}
              htmlFor={`settings-modal-${id}`}
              className="btn btn-ghost btn-sm"
            >
              <AiOutlineEdit className="h-5 w-5" />
            </label>
            <div className="btn btn-ghost btn-sm max-[420px]:hidden">
              <AiOutlineFieldTime className="h-5 w-5" />
            </div>
            <div className="btn btn-ghost btn-sm max-[420px]:hidden">
              <AiOutlineComment className="h-5 w-5" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Task;
